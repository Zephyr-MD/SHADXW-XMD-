import baileys from "@whiskeysockets/baileys"
const {
  default: makeWASocket,
  DisconnectReason,
  makeInMemoryStore,
  jidDecode,
  proto,
  getContentType,
  useMultiFileAuthState,
  downloadContentFromMessage,
} = baileys

import pino from "pino"
import { Boom } from "@hapi/boom"
import fs from "fs"
import path from "path"
import readline from "readline"
import PhoneNumber from "awesome-phonenumber"
import chalk from "chalk"
import { smsg } from "./lib/myfunction.js"
import cron from "node-cron"
import { fileURLToPath } from "url"
import caseHandler from "./lib/commands/case.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create necessary directories if they don't exist
if (!fs.existsSync("./lib")) {
  fs.mkdirSync("./lib")
}
if (!fs.existsSync("./lib/commands")) {
  fs.mkdirSync("./lib/commands", { recursive: true })
}
if (!fs.existsSync("./lib/settings")) {
  fs.mkdirSync("./lib/settings", { recursive: true })
}

// Display HIRAGII banner with improved styling
const displayBanner = () => {
  const bannerWidth = 60
  const title = "SHADXW-XMD WhatsApp bot | © ELITEPRO 2025"

  // Create top border
  console.log(chalk.magenta("+" + "=".repeat(bannerWidth - 2) + "+"))

  // Create HIRAGII ASCII art
  console.log(
    chalk.magenta("|") +
      chalk.cyan(
        `
╔╗╴╴╴╔══════╗
║║╴╴╴║╴╔════╝
║╚═══╝╴╚════╗
╚════╗╴╔═══╗║
╔════╝╴║╴╴╴║║
╚══════╝╴╴╴╚╝`.padEnd(bannerWidth - 3),
      ) +
      chalk.magenta("|"),
  )

  // Create separator
  console.log(chalk.magenta("|" + "-".repeat(bannerWidth - 2) + "|"))

  // Create title
  const paddingLeft = Math.floor((bannerWidth - title.length - 2) / 2)
  const paddingRight = bannerWidth - title.length - 2 - paddingLeft
  console.log(
    chalk.magenta("|") + " ".repeat(paddingLeft) + chalk.yellow(title) + " ".repeat(paddingRight) + chalk.magenta("|"),
  )

  // Create bottom border
  console.log(chalk.magenta("+" + "=".repeat(bannerWidth - 2) + "+"))
}

// Display the banner
displayBanner()

// Initialize store
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) })

const question = (text) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise((resolve) => {
    rl.question(text, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

// Get session directory from config
import "./lib/settings/config.js"
const SESSION_DIR = globalThis.sessionDir || "./session"

// Create session directory if it doesn't exist
if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR, { recursive: true })
  console.log(chalk.green(`Created session directory: ${SESSION_DIR}`))
}

/**
 * Cleans session files while preserving creds.json
 * @returns {Object} - Result of the cleaning operation
 */
const clearSessionFiles = async () => {
  try {
    if (!fs.existsSync(SESSION_DIR)) {
      return { success: false, error: "Session directory does not exist", removedCount: 0, preservedCount: 0 }
    }

    const files = fs.readdirSync(SESSION_DIR)
    let removedCount = 0
    let preservedCount = 0

    for (const file of files) {
      const filePath = path.join(SESSION_DIR, file)
      if (fs.statSync(filePath).isDirectory()) continue
      if (file === "creds.json") {
        preservedCount++
        continue
      }
      fs.unlinkSync(filePath)
      removedCount++
    }

    console.log(chalk.green(`Session cleaned: Removed ${removedCount} files, preserved ${preservedCount} files`))
    return { success: true, removedCount, preservedCount }
  } catch (error) {
    console.error(chalk.red("Error cleaning session:"), error)
    return { success: false, error: error.message, removedCount: 0, preservedCount: 0 }
  }
}

// Setup session auto-cleaner to run every 1 hours
const setupSessionCleaner = () => {
  cron.schedule("0 */1 * * *", async () => {
    console.log(chalk.yellow("Running scheduled session cleanup..."))
    await clearSessionFiles()
  })
  console.log(chalk.green("✓") + chalk.yellow(" Auto session cleaner enabled"))
  console.log(chalk.yellow("   Cleaning interval: 1 hours"))
  console.log(chalk.yellow(`   Session directory: ${SESSION_DIR}`))
}

// Initialize session cleaner
setupSessionCleaner()

// Create a box with text centered inside
const createBox = (text, width, color = "green", padding = 1) => {
  const horizontalBorder = "+" + "=".repeat(width - 2) + "+"
  const emptyLine = "|" + " ".repeat(width - 2) + "|"

  let result = chalk[color](horizontalBorder) + "\n"

  // Add padding top
  for (let i = 0; i < padding; i++) {
    result += chalk[color](emptyLine) + "\n"
  }

  // Add text centered
  const paddingLeft = Math.floor((width - text.length - 2) / 2)
  const paddingRight = width - text.length - 2 - paddingLeft
  result +=
    chalk[color]("|") +
    " ".repeat(paddingLeft) +
    chalk.white(text) +
    " ".repeat(paddingRight) +
    chalk[color]("|") +
    "\n"

  // Add padding bottom
  for (let i = 0; i < padding; i++) {
    result += chalk[color](emptyLine) + "\n"
  }

  result += chalk[color](horizontalBorder)
  return result
}

async function startBot() {
  // Initialize multi file auth state
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR)

  const conn = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: state,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    emitOwnEvents: true,
    fireInitQueries: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
  })

  // Pairing code logic
  let phoneNumber
  let code
  let pairingCodeRequested = false

  // Function to request pairing code
  const requestPairingCode = async () => {
    phoneNumber = await question(chalk.green("Enter your WhatsApp number starting with country code (e.g., 234xxx): "))
    if (phoneNumber) {
      try {
        code = await conn.requestPairingCode(phoneNumber)
        code = code?.match(/.{1,4}/g)?.join("-") || code
        pairingCodeRequested = true
      } catch (error) {
        console.error(chalk.red("Error requesting pairing code:"), error)
      }
    }
  }

  // Check if registration is required and request pairing code
  if (!conn.authState.creds.registered) {
    console.log(createBox("PAIRING CODE REQUIRED", 40, "yellow", 0))
    await requestPairingCode()
  }

  // Display pairing code if requested
  if (pairingCodeRequested && code) {
    console.log(createBox("PAIRING CODE", 40, "blue", 0))
    console.log(createBox(code, 40, "blue", 0))
  }

  store.bind(conn.ev)

  conn.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      const mek = chatUpdate.messages[0]
      if (!mek.message) return
      mek.message =
        Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message
      if (mek.key && mek.key.remoteJid === "status@broadcast") return
      if (!conn.public && !mek.key.fromMe && chatUpdate.type === "notify") return
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return
      const m = smsg(conn, mek, store)
      caseHandler(conn, m, chatUpdate, store)
    } catch (err) {
      console.log(err)
    }
  })

  // Utility functions
  conn.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      const decode = jidDecode(jid) || {}
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid
    } else return jid
  }

  conn.getName = (jid, withoutContact = false) => {
    const id = conn.decodeJid(jid)
    withoutContact = conn.withoutContact || withoutContact
    let v
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {}
        if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"))
      })
    else
      v =
        id === "0@s.whatsapp.net"
          ? { id, name: "WhatsApp" }
          : id === conn.decodeJid(conn.user.id)
            ? conn.user
            : store.contacts[id] || {}
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international")
    )
  }

  conn.public = true
  conn.serializeM = (m) => smsg(conn, m, store)

  conn.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
      if (
        reason === DisconnectReason.badSession ||
        reason === DisconnectReason.connectionClosed ||
        reason === DisconnectReason.connectionLost ||
        reason === DisconnectReason.connectionReplaced ||
        reason === DisconnectReason.restartRequired ||
        reason === DisconnectReason.timedOut
      ) {
        console.log(chalk.yellow("Reconnecting..."))
        startBot()
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("Session logged out, please delete the session folder and scan again."))
      } else {
        console.log(chalk.red(`Unknown DisconnectReason: ${reason}|${connection}`))
      }
    } else if (connection === "open") {
      console.log(createBox("CONNECTION STATUS", 40, "green", 0))
      console.log(createBox("CONNECTED", 40, "green", 0))
      console.log(chalk.green("[Connected] ") + conn.user.id)
    }
  })

  conn.ev.on("creds.update", saveCreds)

  conn.sendText = (jid, text, quoted = "", options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

  conn.downloadMediaMessage = async (message) => {
    const mime = (message.msg || message).mimetype || ""
    const messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0]
    try {
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      return buffer
    } catch (e) {
      console.error("Error downloading media:", e)
      return null
    }
  }

  return conn
}

// Start the bot immediately
startBot().catch((err) => console.log(chalk.red("Error:"), err))

// Watch for file changes
fs.watchFile(__filename, () => {
  fs.unwatchFile(__filename)
  console.log(chalk.redBright(`Update ${__filename}`))
  import(`file://${__filename}?update=${Date.now()}`).catch(console.error)
})

