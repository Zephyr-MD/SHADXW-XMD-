require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: EliteProTechConnect, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("baileys")
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("baileys").default

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = "2349138538601"
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startEliteProTech() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const EliteProTech = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(EliteProTech.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !EliteProTech.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +2349138538601")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFor example: +2349138538601 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +2349138538601")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFor example: +2349138538601 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await EliteProTech.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }

    EliteProTech.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!EliteProTech.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(EliteProTech, mek, store)
            require("./SHADXW-XMD")(EliteProTech, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    EliteProTech.ev.on('messages.upsert', async chatUpdate => {
    if (!global.autolikestatus) return;
    
    const mek = chatUpdate.messages[0];
    if (!mek.message || mek.key.fromMe) return;
    
    const from = mek.key.remoteJid;
    const isStatusUpdate = from === 'status@broadcast';
    if (!isStatusUpdate) return;
    
    try {
        // Automatically view the status update
        await EliteProTech.readMessages([mek.key]);
        
        // Random emoji selection
        const emojis = [
            '❤️', '💸', '😇', '🍂', '💥', '💯', '🔥', '💫', '💎', '💗',
            '🤍', '🖤', '👀', '🙌', '🙆', '🚩', '🥰', '💐', '😎', '🤎',
            '✅', '⚡', '🧡', '😁', '😄', '🌸', '🕊️', '🌷', '⛅', '🌟',
            '🗿', '☠️', '💜', '💙', '🌝', '💚'
        ];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Send reaction to status
        await EliteProTech.sendMessage(from, {
            react: {
                text: randomEmoji,
                key: mek.key,
            }
        }, {
            statusJidList: [mek.key.participant || mek.participant]
        });
    } catch (error) {
        console.error("Auto-reaction error on status:", error);
    }
});

// Auto-reaction to messages
let emojiFile = './lib/autoreact.json';

let emojis = [];
try {
    const data = fs.readFileSync(emojiFile, 'utf8');
    emojis = JSON.parse(data);
} catch (err) {
    console.error('Error loading emoji list:', err);
}

EliteProTech.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        
        // Skip if invalid message or bot's own message
        if (!mek || !mek.key || mek.key.fromMe) return;
        
        // Determine chat type
        const isGroupChat = mek.key.remoteJid.endsWith('@g.us');
        
        if (global.autoreact && emojis.length > 0) {
            // Select random emoji
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Send reaction
            await EliteProTech.sendMessage(mek.key.remoteJid, {
                react: { 
                    text: randomEmoji, 
                    key: mek.key 
                }
            });
        }
    } catch (err) {
        console.error('Message auto-reaction error:', err);
    }
});
    //autostatus view
        EliteProTech.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await EliteProTech.readMessages([mek.key]) }
            }
    })

   
    EliteProTech.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    EliteProTech.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = EliteProTech.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    EliteProTech.getName = (jid, withoutContact = false) => {
        id = EliteProTech.decodeJid(jid)
        withoutContact = EliteProTech.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = EliteProTech.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === EliteProTech.decodeJid(EliteProTech.user.id) ?
            EliteProTech.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    EliteProTech.public = true

    EliteProTech.serializeM = (m) => smsg(EliteProTech, m, store)

EliteProTech.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
        	console.log(chalk.magenta(` `))
            console.log(chalk.yellow(`🔄 Connected to => ` + JSON.stringify(EliteProTech.user, null, 2)))
			await delay(1999)
            console.log(chalk.yellow(`\n\n                  ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
            console.log(chalk.cyan(`< ================================================== >`))
	        console.log(chalk.magenta(`\n${themeemoji} YT CHANNEL: LUFFY-LANG`))
            console.log(chalk.magenta(`${themeemoji} GITHUB: LUFFY-LANG`))
            console.log(chalk.magenta(`${themeemoji} Company: EliteProTech`))
            console.log(chalk.magenta(`${themeemoji} WA NUMBER: ${owner}`))
            console.log(chalk.magenta(`${themeemoji} Developer: LUFFY-LANG`))
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            startEliteProTech()
        }
    })
    EliteProTech.ev.on('creds.update', saveCreds)
    EliteProTech.ev.on("messages.upsert",  () => { })

    EliteProTech.sendText = (jid, text, quoted = '', options) => EliteProTech.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    EliteProTech.sendTextWithMentions = async (jid, text, quoted, options = {}) => EliteProTech.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    EliteProTech.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await EliteProTech.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    EliteProTech.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await EliteProTech.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    EliteProTech.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    EliteProTech.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startEliteProTech()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})