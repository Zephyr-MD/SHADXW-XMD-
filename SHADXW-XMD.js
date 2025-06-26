const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys')
const GITHUB_PAT = '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'
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const yts = require('yt-search')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteelite = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerelite = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imageelite = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videoelite = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docelite = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipelite = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkelite = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))
// Add this at the top of your file with other declarations
const conversationHistory = new Map();
const animeHistory = new Map();
//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var eliteytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var eliteytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var eliteytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var eliteytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var eliteytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var eliteytimewisher = `Good Morning 🌄`
 } 
module.exports = EliteProTech = async (EliteProTech, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await EliteProTech.decodeJid(EliteProTech.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await EliteProTech.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(EliteProTech, m, premium);

//Default reply settings 
const reply = (teks) => {
EliteProTech.sendMessage(m.chat,
{ text: teks,
contextInfo:{
forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterName: "ÅRÎSË THÊ SYSTĒM ÃWÂÌTS",
        newsletterJid: "120363399521407327@newsletter",
    },    
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `Hey ${pushname} `,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./ShadxwMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}


const eliteimun = (texto) => {
EliteProTech.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

        if (!EliteProTech.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            EliteProTech.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        EliteProTech.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        EliteProTech.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        EliteProTech.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let eliterecordin = ['recording','composing']
        let eliterecordinfinal = eliterecordin[Math.floor(Math.random() * eliterecordin.length)]
        EliteProTech.sendPresenceUpdate(eliterecordinfinal, from)

        }
        
        if (autobio) {
            EliteProTech.updateProfileStatus(`Zephyr-MD IS ONLINE: User ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return EliteProTech.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await EliteProTech.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await EliteProTech.getName(i)}\nFN:${await EliteProTech.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let Bhosdikaelite of VoiceNoteelite) {
if (budy === Bhosdikaelite) {
let audiobuffy = fs.readFileSync(`./ShadxwMedia/audio/${Bhosdikaelite}.mp3`)
EliteProTech.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let Bhosdikaelite of Stickerelite){
if (budy === Bhosdikaelite){
let stickerbuffy = fs.readFileSync(`./ShadxwMedia/sticker/${Bhosdikaelite}.webp`)
EliteProTech.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let Bhosdikaelite of Imageelite){
if (budy === Bhosdikaelite){
let imagebuffy = fs.readFileSync(`./ShadxwMedia/image/${Bhosdikaelite}.jpg`)
EliteProTech.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let Bhosdikaelite of Videoelite){
if (budy === Bhosdikaelite){
let videobuffy = fs.readFileSync(`./ShadxwMedia/video/${Bhosdikaelite}.mp4`)
EliteProTech.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
EliteProTech.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let Bhosdikaelite of Apkelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./ShadxwMedia/apk/${Bhosdikaelite}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
EliteProTech.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let Bhosdikaelite of Zipelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./ShadxwMedia/zip/${Bhosdikaelite}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let Bhosdikaelite of Docelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./ShadxwMedia/doc/${Bhosdikaelite}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                EliteProTech.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
// STARING POINT FOR CASE CODE
switch (command) {
case 'addprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 2)
                    return reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    reply("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    reply("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return reply(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                EliteProTech.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'post': {
    try {
        if (!isCreator) return reply('This command is restricted to the bot owner');
        
        let content = null;
        let caption = full_args || '';
        let quotedMime = quoted?.mimetype || '';

        // Handle quoted message
        if (quoted) {
            if (/image/.test(quotedMime)) {
                content = { image: await EliteProTech.downloadMediaMessage(quoted) };
            } else if (/video/.test(quotedMime)) {
                content = { video: await EliteProTech.downloadMediaMessage(quoted) };
            } else if (/audio/.test(quotedMime)) {
                content = { audio: await EliteProTech.downloadMediaMessage(quoted) };
            } else if (quoted.text) {
                content = { text: quoted.text };
            }
        } 
        // Handle current message media
        else if (isMedia) {
            if (isImage) {
                content = { image: await EliteProTech.downloadMediaMessage(m) };
            } else if (isVideo) {
                content = { video: await EliteProTech.downloadMediaMessage(m) };
            } else if (isAudio) {
                content = { audio: await EliteProTech.downloadMediaMessage(m) };
            }
        }
        // Handle text-only message
        else if (isText && body) {
            content = { text: body };
        }

        // Validate content exists
        if (!content) return reply('Please tag/send/reply to media or text');

        // Send to status
        await EliteProTech.sendMessage('status@broadcast', {
            ...content,
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    title: `${global.botname}`,
                    body: 'Posted via SHADXW-XMD',
                    thumbnail: fs.readFileSync('./ShadxwMedia/thumb.jpg'),
                    sourceUrl: global.link
                }
            }
        });

        reply('✅ Successfully posted to status!');
    } catch (error) {
        console.error('Status post error:', error);
        reply('Failed to post to status: ' + error.message);
    }
    break;
}
case 'update': {
    if (!isCreator) return reply(mess.owner);
    
    try {
        // Show update status
        await EliteProTech.sendMessage(m.chat, { 
            react: { text: '🔄', key: m.key } 
        });
        
        const loadingMsg = await reply('🔁 Updating from GitHub repository...');
        
        // Import required modules
        const { promisify } = require('util');
        const exec = promisify(require('child_process').exec);
        
        // Step 1: Configure Git with PAT
        await exec(`git config --global user.name "SHADXW-XMD-Bot"`);
        await exec(`git config --global user.email "bot@shadxw-xmd.com"`);
        
        // Step 2: Pull latest changes using PAT
        const gitPull = `git pull https://${GITHUB_PAT}@github.com/Zephyr-MD/SHADXW-XMD-.git main`;
        const { stdout: pullOutput } = await exec(gitPull);
        
        // Step 3: Check for package changes
        let npmInstallOutput = '';
        if (pullOutput.includes('package.json')) {
            await EliteProTech.sendMessage(m.chat, { 
                text: '🔄 Installing dependencies...',
                edit: {
                    remoteJid: loadingMsg.key.remoteJid,
                    id: loadingMsg.key.id,
                    fromMe: true
                }
            });
            const { stdout: npmOutput } = await exec('npm install');
            npmInstallOutput = npmOutput;
        }
        
        // Step 4: Send success message
        const successMessage = `✅ Update successful!\n\n` +
            `📥 *Git Changes:*\n\`\`\`${pullOutput.substring(0, 500)}\`\`\`\n` +
            (npmInstallOutput ? `📦 *Dependencies:*\n\`\`\`${npmInstallOutput.substring(0, 300)}\`\`\`\n` : '') +
            `🔄 Restarting bot...`;
            
        await EliteProTech.sendMessage(m.chat, { 
            text: successMessage,
            edit: {
                remoteJid: loadingMsg.key.remoteJid,
                id: loadingMsg.key.id,
                fromMe: true
            }
        });
        
        // Step 5: Restart bot after delay
        setTimeout(() => {
            exec('pm2 restart all');
        }, 3000);
        
    } catch (error) {
        console.error('Update error:', error);
        const errorMessage = `❌ Update failed:\n\`\`\`${error.stderr || error.message}\`\`\`\n` +
            `Please update manually using:\n\`git pull https://<TOKEN>@github.com/Zephyr-MD/SHADXW-XMD-.git\``;
        
        reply(errorMessage);
    }
    break;
}
case 'gitclone':
case 'github': {
    if (!text) return reply(`*Example*: ${prefix + command} https://github.com/user/repo`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: '📦', key: m.key } });
        
        // Extract repo from URL
        let repoUrl = text.trim();
        if (!repoUrl.includes('github.com')) {
            return reply('❌ Please provide a valid GitHub URL');
        }
        
        // Normalize URL
        repoUrl = repoUrl.replace('git://', 'https://')
                        .replace('.git', '')
                        .replace('www.github.com', 'github.com');
        
        // Ensure proper format
        if (!repoUrl.startsWith('https://github.com/')) {
            repoUrl = `https://github.com/${repoUrl.split('github.com/')[1]}`;
        }
        
        // Get repo name
        const repoPath = repoUrl.split('github.com/')[1];
        const [owner, repo] = repoPath.split('/');
        
        if (!owner || !repo) {
            return reply('❌ Invalid GitHub repository format');
        }
        
        // Download ZIP
        const zipUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`;
        const response = await axios.get(zipUrl, { responseType: 'arraybuffer' });
        
        // Get file size
        const fileSize = (response.data.length / (1024 * 1024)).toFixed(2) + ' MB';
        
        // Send as document
        await EliteProTech.sendMessage(m.chat, {
            document: response.data,
            fileName: `${repo}-main.zip`,
            mimetype: 'application/zip',
            caption: `📦 *GitHub Repository Cloned*\n\n` +
                    `🔗 *Repository:* ${repoUrl}\n` +
                    `👤 *Owner:* ${owner}\n` +
                    `🏷️ *Repo:* ${repo}\n` +
                    `📏 *Size:* ${fileSize}\n\n` +
                    `> *Powered by Bellion's Intel.Inc©*`,
            contextInfo: {
                externalAdReply: {
                    title: `${owner}/${repo}`,
                    body: 'GitHub Repository Clone',
                    thumbnailUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    mediaType: 1,
                    sourceUrl: repoUrl
                }
            }
        }, { quoted: m });
        
    } catch (error) {
        console.error('GitClone Error:', error);
        
        if (error.response?.status === 404) {
            reply('❌ Repository not found. Try including the branch name if not "main"');
        } else {
            reply('❌ Failed to download repository. Please check:\n1. URL validity\n2. Repository visibility\n3. Try again later');
        }
    }
    break;
}
case 'getpp': 
case 'pp': {
  let target;
  
  // Target determination logic remains unchanged
  if (m.message?.extendedTextMessage?.contextInfo?.participant) {
    target = m.message.extendedTextMessage.contextInfo.participant;
  }
  else if (!m.isGroup) {
    target = m.chat;
  }
  else if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid) {
    target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
  }
  else if (args[0]) {
    target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  }
  else {
    target = m.sender;
  }
  
  const username = target.split('@')[0];
  const profileCaption = `*@${username} profile picture*`;
  
  let ppuser;
  try {
    ppuser = await EliteProTech.profilePictureUrl(target, 'image');
  } catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  }
  
  const ppelite = await getBuffer(ppuser);
  
  EliteProTech.sendMessage(
    from,
    { 
      image: ppelite,
      caption: profileCaption,
      mentions: [target]
    },
    { quoted: m }
  );
  break;
}

case 'chatgpt':
case 'ai':
case 'gpt': {
    if (!text) return reply("Hi dear, how can I help you today?");
    
    const prompt = "I'm Alpha integrated into SHADXW-XMD. Our conversation history:";
    const memoryKey = `${m.chat}:${m.sender}`;
    
    try {
        // Show typing indicator
        await EliteProTech.sendPresenceUpdate('composing', m.chat);
        
        // Retrieve conversation history
        let history = conversationHistory.get(memoryKey) || [];
        
        // Build conversation context
        const conversationContext = history.slice(-5).map((entry, i) => 
            `${i % 2 === 0 ? 'You' : 'AI'}: ${entry}`
        ).join('\n');
        
        const fullQuery = `${prompt}\n${conversationContext}\n\nCurrent query: ${text}`;
        
        const response = await axios.get("https://mannoffc-x.hf.space/ai/logic", {
            params: {
                q: fullQuery,
                logic: "Continue our conversation naturally"
            },
            timeout: 30000
        });
        
        // Store conversation in memory
        history.push(text); // User's question
        history.push(response.data.result); // AI's response
        
        // Limit history to last 6 exchanges (3 Q/A pairs)
        if (history.length > 6) history = history.slice(-6);
        conversationHistory.set(memoryKey, history);
        
        // Format response with context awareness
        const aiResponse = `🤖 *AI Response* (Context-aware)\n\n${response.data.result}\n\n_Remembering ${history.length/2} previous exchanges_`;
        reply(aiResponse);
        
    } catch (error) {
        console.error('AI Error:', error);
        
        if (error.response) {
            reply(`❌ API Error: ${error.response.status}`);
        } else if (error.request) {
            reply("⌛ The AI is taking too long to respond. Please try again later.");
        } else {
            reply(`⚠️ Error: ${error.message}`);
        }
    }
    break;
}
case 'ssweb':
case 'screenshot': {
    if (!text) return reply(`Please provide a URL\nExample: ${prefix}ssweb https://google.com`);
    
    // Add https:// prefix if missing
    let url = args[0];
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    try {
        // Show loading indicator
        await EliteProTech.sendMessage(m.chat, { react: { text: '📸', key: m.key } });
        
        const API_KEY = '433b768336264f0fb968c924cfd7a854';
        const apiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&wait_until=page_loaded&url=${encodeURIComponent(url)}&width=1280&height=720&format=png`;
        
        // Fetch the screenshot
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        
        // Send the image
        await EliteProTech.sendMessage(m.chat, {
            image: response.data,
            caption: `🖼️ *Website Screenshot*\n🔗 *URL:* ${url}\n📏 *Dimensions:* 1280x720px\n> Powered by Igris photography.inc`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Screenshot error:', error);
        reply(`❌ Failed to capture screenshot. Please check:\n1. URL validity\n2. Server availability\n3. Try again later\n\nError: ${error.message}`);
    }
    break;
}
case 'vv': {
  const { downloadMediaMessage } = require('baileys');
  if (!m.quoted) return reply(`Reply to a view-once image, video, or audio.`);
  try {
    // Check if message has media (image, video, or audio)
    let media = await quoted.download();
    let caption = quoted.text || quoted.caption || ''; // Extract caption if present
    
    if (/image/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        image: media, 
        caption: `${caption}\n> *Igris evidence*` 
      }, { quoted: m });
    } else if (/video/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        video: media, 
        caption: `${caption}\n> *Igris evidence*` 
      }, { quoted: m });
    } else if (/audio/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        audio: media, 
        mimetype: 'audio/mp4', 
        caption: `${caption}\n> *Igris evidence*` 
      }, { quoted: m });
    } else {
      return reply(`Please reply to an image, video, or audio.`);
    }
    
  } catch (error) {
    console.error("Error processing media:", error);
  }
  break;
}
case 'statusdl':
case 'statsdl': {

  const { downloadMediaMessage } = require('baileys');

  if (!m.quoted) return reply(`Reply to a status.`);
  try {
    // Check if message has media (image, video, or audio)
    let media = await quoted.download();
    let caption = quoted.text || quoted.caption || ''; // Extract caption if present
    
    if (/image/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        image: media, 
        caption: `${caption}\n> *Safe keeping*` 
      }, { quoted: m });
    } else if (/video/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        video: media, 
        caption: `${caption}\n> *Safe keeping*` 
      }, { quoted: m });
    } else if (/audio/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { 
        audio: media, 
        mimetype: 'audio/mp4', 
        caption: `${caption}\n> *Safe keeping*` 
      }, { quoted: m });
    } else {
      return reply(`Please reply to a status`);
    }
    
  } catch (error) {
    console.error("Error processing media:", error);
  }
  break;
}
case 'tiktok':
case 'facebook':
case 'aio':
case 'instagram': 
case 'ig': 
case 'fb': 
case 'ttk': {
    if (!text) return reply(`Give Me A Video Link \n\n*Example:* ${prefix + command} https://www.facebook.com/reel/123456`);
    await EliteProTech.sendMessage(m.chat, { react: { text: `👨🏼‍💻`, key: m.key } });
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
        
        if (response.data.success) {
            const { title, low_quality, high_quality } = response.data.video;
            
            const isHDDirect = high_quality.includes("tinyurl");
            const isSDDirect = low_quality.includes("tinyurl");
            
            if (isHDDirect || isSDDirect) {
                if (high_quality && isHDDirect) {
                    await EliteProTech.sendMessage(m.chat, {
                        video: { url: high_quality },
                        mimetype: 'video/mp4',
                        fileName: `${title}_HD.mp4`,
                        caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *BERU Social*`
                    }, { quoted: m });
                }
                if (low_quality && isSDDirect) {
                    await EliteProTech.sendMessage(m.chat, {
                        video: { url: low_quality },
                        mimetype: 'video/mp4',
                        fileName: `${title}_SD.mp4`,
                        caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *BERU Social*`
                    }, { quoted: m });
                }
            } else {
                await EliteProTech.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
                
                if (high_quality) {
                    const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
                    await EliteProTech.sendMessage(m.chat, {
                        video: Buffer.from(hdBuffer.data),
                        mimetype: 'video/mp4',
                        fileName: `${title}_HD.mp4`,
                        caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *BERU Social*`
                    }, { quoted: m });
                }
                if (low_quality) {
                    const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
                    await EliteProTech.sendMessage(m.chat, {
                        video: Buffer.from(sdBuffer.data),
                        mimetype: 'video/mp4',
                        fileName: `${title}_SD.mp4`,
                        caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *BERU Social*`
                    }, { quoted: m });
                }
            }
        } else {
            reply("❌ Unable to fetch the video. Please check the URL and try again.");
        }
    } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'ping': {
    // Add satellite reaction to user's message
    await EliteProTech.sendMessage(m.chat, { 
        react: { 
            text: "📡", 
            key: m.key 
        } 
    });

    const start = performance.now();
    // Send initial pinging message
    const initialMessage = await EliteProTech.sendMessage(m.chat, { 
        text: '📡 *Pinging...*' 
    }, { quoted: m });

    const end = performance.now();
    const latency = end - start;
    const uptime = runtime(process.uptime());
    
    // Calculate response speed rating
    const speedRating = latency < 1000 
        ? '🚀 Extremely Fast' 
        : latency < 3000 
            ? '⚡ Fast' 
            : '🐢 Slow';

    // Build result message
    const resultMessage = `
🖥️ *SERVER STATUS*
• Latency: ${latency.toFixed(2)}ms
• Speed: ${speedRating}
• Uptime: ${uptime}
    `;

    // Edit the original message with results
    await EliteProTech.sendMessage(m.chat, {
        text: resultMessage,
        edit: {
            remoteJid: initialMessage.key.remoteJid,
            id: initialMessage.key.id,
            fromMe: true
        }
    });
    break;
}

case 'getgcpp': 
case 'gcpp': {
  // Only works in groups
  if (!m.isGroup) return reply('❌ This command can only be used in group chats');
  
  let target = m.chat;  // Always use current group's JID
  let groupName = await EliteProTech.groupMetadata(target).then(m => m.subject).catch(() => "Unknown Group");
  
  try {
    ppgroup = await EliteProTech.profilePictureUrl(target, 'image');
  } catch (err) {
    ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  }
  
  ppelite = await getBuffer(ppgroup);
  
  EliteProTech.sendMessage(
    from, 
    {
      image: ppelite,
      caption: `*${groupName}'s Profile Picture*`,
      mentions: [target]
    }, 
    { quoted: m }
  );
  break;
}
case 'autolikestatus': {
    if (!isCreator) return reply(mess.owner);
    
    if (args.length < 1) return reply('🤔 Please specify: on/off?');
    
    if (args[0] === 'on') {
        autolikestatus = true;
        reply('😌 Auto-like status has been enabled');
    } else if (args[0] === 'off') {
        autolikestatus = false;
        reply('😔 Auto-like status has been disabled');
    }
    break;
}
case 'autoreact':
case 'auto_react': {
    if (!isCreator) return reply(mess.owner);
    
    if (args.length < 1) return reply('🤔 Please specify: on/off?');
    
    if (args[0] === 'on') {
        autoreact = true;
        reply(`🤸 Auto-react has been enabled`);
    } else if (args[0] === 'off') {
        autoreact = false;
        reply(`👀 Auto-react has been disabled`);
    }
    break;
}
case 'song': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });
        
        const search = await yts(text);
        const video = search.videos[0];
        
        if (!video) return reply(`*No results found for:* ${text}`);
        
        const thumbnailUrl = video.thumbnail;
        const videoUrl = video.url;
        
        // Using the exact ASCII art from your original song command
        const body = `╭━━━━━━━━━\n` +
            `┃ *BERU'S MUSIC - LIBRARY*\n\n` +
            `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
            `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
            `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
            `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
            `> *ᴜʀʟ:* ${videoUrl}\n\n` +
            `┃ *Enjoy your music*\n` +
            `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
            `> *BERU HAS GOTTEN YOUR SONG 🐜🐜*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: body
        }, { quoted: m });
        
        let success = false;
        let download_url, title;
        
        // Try first API
        try {
            const res1 = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
            if (res1?.data?.success) {
                download_url = res1.data.result.download_url;
                title = res1.data.result.title;
                success = true;
            }
        } catch (e) {
            console.warn('Primary API failed:', e.message);
        }
        
        // Try second API if first failed
        if (!success) {
            try {
                const res2 = await axios.get(`https://api.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(videoUrl)}`);
                if (res2?.data?.success) {
                    download_url = res2.data.result.download_url;
                    title = res2.data.result.title;
                    success = true;
                }
            } catch (e) {
                console.warn('Secondary API failed:', e.message);
            }
        }
        
        // Try third API (NexOracle) if both failed
        if (!success) {
            try {
                const res3 = await axios.get(`https://api.nexoracle.com/downloader/yt-audio2?apikey=a41a0a98dc996c67e3&url=${encodeURIComponent(videoUrl)}`);
                
                // Handle response formats
                if (res3.data?.url) {
                    download_url = res3.data.url;
                } else if (res3.data?.result?.url) {
                    download_url = res3.data.result.url;
                } else if (res3.data?.link) {
                    download_url = res3.data.link;
                } else if (res3.data?.downloadUrl) {
                    download_url = res3.data.downloadUrl;
                }
                
                if (download_url) {
                    title = res3.data?.title || 
                           res3.data?.result?.title || 
                           res3.data?.videoTitle || 
                           video.title;
                    success = true;
                }
            } catch (e) {
                console.warn('NexOracle API failed:', e.message);
            }
        }
        
        // Send audio as document
        if (success) {
            await EliteProTech.sendMessage(m.chat, {
                document: { url: download_url },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your track:*\n> *BERU ™*`,
                contextInfo: {
                    externalAdReply: {
                        title: `${title}`,
                        body: `🎵 High Quality • BERU ™`,
                        thumbnailUrl: thumbnailUrl,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } else {
            reply(`*❌ Failed to fetch the song from all sources. Please try again later.*`);
        }
        
    } catch (error) {
        console.error('Error during song command:', error);
        reply(`_*An error occurred while downloading*_ > Please try again later.`);
    }
    break;
}
case 'recani':
case 'anirec':
case 'recommendanime': {
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: '🌀', key: m.key } });
        
        // Get or initialize user's anime history
        const userId = m.sender;
        let userHistory = animeHistory.get(userId) || new Set();
        
        // Fetch popular anime (larger pool for better variety)
        const response = await axios.get('https://api.jikan.moe/v4/top/anime?limit=100');
        const animeList = response.data.data;
        
        if (!animeList || animeList.length === 0) {
            return reply('❌ No anime found. Please try again later.');
        }
        
        // Filter out recently recommended anime
        const availableAnime = animeList.filter(anime => 
            !userHistory.has(anime.mal_id)
        );
        
        let selectedAnime;
        
        if (availableAnime.length > 0) {
            // Select from unseen anime
            selectedAnime = availableAnime[Math.floor(Math.random() * availableAnime.length)];
        } else {
            // Reset history if all seen
            userHistory.clear();
            selectedAnime = animeList[Math.floor(Math.random() * animeList.length)];
        }
        
        // Add to history
        userHistory.add(selectedAnime.mal_id);
        animeHistory.set(userId, userHistory);
        
        // Extract details
        const { title, type, episodes, score, synopsis, images, url } = selectedAnime;
        const imageUrl = images.jpg.large_image_url;
        
        // Clean and truncate synopsis
        const cleanSynopsis = synopsis
            .replace(/\\n/g, '\n')
            .replace(/\[[^\]]+\]/g, '')
            .substring(0, 300) + (synopsis.length > 300 ? '...' : '');
        
        // Format recommendation
        const animeInfo = `🎌 *${title}* (${type})\n\n` +
            `⭐ *Score:* ${score || 'N/A'}\n` +
            `📺 *Episodes:* ${episodes || 'Unknown'}\n\n` +
            `📖 *Synopsis:*\n${cleanSynopsis}\n\n` +
            `🔗 *More Info:* ${url}\n\n` +
            `> *You've seen ${userHistory.size} recommendations*`;
        
        // Get image and send
        const imageBuffer = await getBuffer(imageUrl);
        
        await EliteProTech.sendMessage(m.chat, {
            image: imageBuffer,
            caption: animeInfo,
            contextInfo: {
                externalAdReply: {
                    title: `Anime Recommendation: ${title}`,
                    body: `Type: ${type} | Score: ${score || 'N/A'}`,
                    thumbnail: imageBuffer,
                    sourceUrl: url,
                    mediaType: 1
                }
            }
        }, { quoted: m });
        
    } catch (error) {
        console.error('Anime Recommendation Error:', error);
        reply('❌ Failed to fetch anime recommendation. The API might be busy, please try again later.');
    }
    break;
}
case 'play':
case 'ytmp3': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: '🎧', key: m.key } });
        
        const search = await yts(text);
        const video = search.videos[0];
        
        if (!video) return reply(`*No results found for:* ${text}`);
        
        const thumbnailUrl = video.thumbnail;
        const videoUrl = video.url;
        
        // Original ASCII art
        const body = `╭━━━━━━━━━
┃ *BERU'S MUSIC - LIBRARY*\n\n
> *ᴛɪᴛʟᴇ:* ${video.title}\n\n
┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n
┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n
┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n
> *ᴜʀʟ:* ${videoUrl}\n\n
┃ *Enjoy your music*\n
╰━━━━━━━━━━━━━━━━━━┈⊷\n
> *BERU HAS GOTTEN YOUR SONG 🐜🐜*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: body
        }, { quoted: m });
        
        let success = false;
        let download_url, title;
        
        // Try first API
        try {
            const res1 = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
            if (res1?.data?.success) {
                download_url = res1.data.result.download_url;
                title = res1.data.result.title;
                success = true;
            }
        } catch (e) {
            console.warn('Primary API failed:', e.message);
        }
        
        // Try second API if needed
        if (!success) {
            try {
                const res2 = await axios.get(`https://api.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(videoUrl)}`);
                if (res2?.data?.success) {
                    download_url = res2.data.result.download_url;
                    title = res2.data.result.title;
                    success = true;
                }
            } catch (e) {
                console.warn('Secondary API failed:', e.message);
            }
        }
        
        // Try third API (NexOracle) if both failed
        if (!success) {
            try {
                const res3 = await axios.get(`https://api.nexoracle.com/downloader/yt-audio2?apikey=a41a0a98dc996c67e3&url=${encodeURIComponent(videoUrl)}`);
                
                // Handle various possible response structures
                if (res3.data?.url) {
                    download_url = res3.data.url;
                } else if (res3.data?.result?.url) {
                    download_url = res3.data.result.url;
                } else if (res3.data?.link) {
                    download_url = res3.data.link;
                } else if (res3.data?.downloadUrl) {
                    download_url = res3.data.downloadUrl;
                }
                
                if (download_url) {
                    // Get title from response or fallback to YouTube title
                    title = res3.data?.title || 
                           res3.data?.result?.title || 
                           res3.data?.videoTitle || 
                           video.title;
                    success = true;
                }
            } catch (e) {
                console.warn('NexOracle API failed:', e.message);
            }
        }
        
        // Send audio with thumbnail card
        if (success) {
            await EliteProTech.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${title}`,
                contextInfo: {
                    externalAdReply: {
                        title: `${title}`,
                        body: `🎵 High Quality • BERU MUSIC`,
                        thumbnailUrl: thumbnailUrl,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } else {
            reply(`*❌ Failed to fetch the song from all sources. Please try again later.*`);
        }
        
    } catch (error) {
        console.error('Error during /play command:', error);
        reply(`_*An error occurred while downloading*_ > Please try again later.`);
    }
    break;
}
case 'video': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
    
    try {
        
        await EliteProTech.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });
        
        
        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0];
        
        let body = `╭━━━━━━━━━\n` +
            `┃ *BERU'S VIEWING CENTER*\n\n` +
            `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
            `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
            `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
            `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
            `> *ᴜʀʟ:* ${video.url}\n\n` +
            `┃ *Enjoy your video®*\n` +
            `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
            `> *BERU FAV SHOW 🙂😎*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });
        
        
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4`;
        const apiResponse = await axios.get(apiUrl, {
            params: { url: video.url }
        });
        
        
        if (apiResponse.data.success) {
            const { title, download_url } = apiResponse.data.result;
            
            // Send the video file directly
            await EliteProTech.sendMessage(m.chat, {
                video: { url: download_url },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
            }, { quoted: m });
        } else {
            reply(`*Error fetching the video! Please try again later.*`);
        }
    } catch (error) {
        console.error('Error during video command:', error);
        reply(`_*An error occur while downloading*_> Please try ytmp4`);
    }
    break;
}
            case 'sc':

            case 'script':
            case 'repo':
                await EliteProTech.sendMessage(m.chat, { react: { text: "📃",key: m.key,}})
                EliteProTech.sendMessage(m.chat, {
                    text: `╭━━━━━━━━━
┃ *SHADXW-XMD- REPO*

> *ɢɪᴛʜᴜʙ:* github.com/Zephyr-MD/SHADXW-XMD-

┃ *Fork and star the GitHub repository*
┃ *Deploy on any platforms*

> *ʏᴛ ᴄʜᴀɴɴᴇʟ:* www.youtube.com/@luffylangdev

┃ *Developer:* Zephyr-MD 
╰━━━━━━━━━━━━━━━━━━┈⊷
> *ÅRÎSË THË SYSTĒM ÃWÂÌTS*`,
                    contextInfo: {
                          forwardingScore: 5,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ÅRÎSË THË SYSTĒM ÃWÂÌTS",
        newsletterJid: "120363399521@newsletter",
      },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `Click here for latest repository details`,
                            thumbnail:fs.readFileSync(`./ShadxwMedia/script.jpg`),
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await EliteProTech.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                EliteProTech.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return reply(mess.owner)
                reply(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                reply('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtype':
                case 'autorecordtyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    EliteProTech.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    EliteProTech.public = false
                    reply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProTech.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProTech.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProTech.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('Bye Everyone 🥺')
                await EliteProTech.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return reply(mess.owner)
                if (m.isGroup) return reply(mess.private)
                reply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await EliteProTech.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await EliteProTech.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    EliteProTech.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'BROADCAST BY SHADXW-XMD',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://files.catbox.moe/kmdmeu.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("SHADXW-XMD.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                EliteProTech.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    EliteProTech.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    EliteProTech.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await EliteProTech.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await EliteProTech.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProTech.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProTech.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProTech.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                EliteProTech.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                EliteProTech.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                EliteProTech.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success In Closing The Group 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success In Opening The Group 🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await EliteProTech.groupInviteCode(m.chat)
                EliteProTech.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await EliteProTech.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\npremium is free go and add your number to settings.js.`
                await EliteProTech.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://files.catbox.moe/kmdmeu.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'uptime':
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                EliteProTech.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `ÅRÎSË THÊ SYSTĒM ÃWÂÌTS`,
                            thumbnailUrl: 'https://files.catbox.moe/kmdmeu.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await EliteProTech.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await EliteProTech.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await EliteProTech.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await EliteProTech.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
EliteProTech.downloadAndSaveMediaMessage(quoted, "gifee")
EliteProTech.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await EliteProTech.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await EliteProTech.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    EliteProTech.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProTech.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgelite.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProTech.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await EliteProTech.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                    EliteProTech.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                    EliteProTech.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await EliteProTech.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext elitey`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteelite.length}*`
                reply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickerelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickerelite.length}*`
                reply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imageelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imageelite.length}*`
                reply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videoelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videoelite.length}*`
                reply(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await EliteProTech.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 2349138538601`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Video Name?')
                if (Videoelite.includes(q)) return reply("The name you entered already exists")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Videoelite.push(q)
                await fsx.copy(delb, `./ShadxwMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videoelite))
                fs.unlinkSync(delb)
                reply(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Video Name')
                if (!Videoelite.includes(q)) return reply("Name Does Not Exist in Database")
                let wanu = Videoelite.indexOf(q)
                Videoelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videoelite))
                fs.unlinkSync(`./ShadxwMedia/video/${q}.mp4`)
                reply(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('The name of the image?')
                if (Imageelite.includes(q)) return reply("The name you entered is already registered in the database")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Imageelite.push(q)
                await fsx.copy(delb, `./ShadxwMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imageelite))
                fs.unlinkSync(delb)
                reply(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Image Name')
                if (!Imageelite.includes(q)) return reply("The image name you entered is not registered")
                let wanu = Imageelite.indexOf(q)
                Imageelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imageelite))
                fs.unlinkSync(`./ShadxwMedia/image/${q}.jpg`)
                reply(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker?')
                if (Stickerelite.includes(q)) return reply("Name Already In Use")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Stickerelite.push(q)
                await fsx.copy(delb, `./ShadxwMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickerelite))
                fs.unlinkSync(delb)
                reply(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker')
                if (!Stickerelite.includes(q)) return reply("Name Not Registered in Database")
                let wanu = Stickerelite.indexOf(q)
                StickerEliteProTech.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickerelite))
                fs.unlinkSync(`./ShadxwMedia/sticker/${q}.webp`)
                reply(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name?')
                if (VoiceNoteelite.includes(q)) return reply("Name Already In Use")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                VoiceNoteelite.push(q)
                await fsx.copy(delb, `./ShadxwMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteelite))
                fs.unlinkSync(delb)
                reply(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name')
                if (!VoiceNoteelite.includes(q)) return reply("Name Not Registered in Database")
                let wanu = VoiceNoteelite.indexOf(q)
                VoiceNoteelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteelite))
                fs.unlinkSync(`./ShadxwMedia/audio/${q}.mp3`)
                reply(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply(`What's the zip name?`)
let teks = `${text}`
{
if (Zipelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
Zipelite.push(teks)
await fsx.copy(delb, `./ShadxwMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipelite))
fs.unlinkSync(delb)
reply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the text in the zip list')
let teks = `${text}`
{
if (!Zipelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = Zipelite.indexOf(teks)
Zipelite.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipelite))
fs.unlinkSync(`./ShadxwMedia/zip/${teks}.zip`)
reply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of Zipelite) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipelite.length}*`
reply(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the apk?')
let teks = `${text}`
{
if (Apkelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./ShadxwMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkelite))
fs.unlinkSync(delb)
reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Name of the apk?')
let teks = `${text}`
{
if (!Apkelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = Apkelite.indexOf(teks)
Apkelite.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkelite))
fs.unlinkSync(`./ShadxwMedia/apk/${teks}.apk`)
reply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of Apkelite) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkelite.length}`
reply(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the pdf')
let teks = `${text}`
{
if (Docelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./ShadxwMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Docelite))
fs.unlinkSync(delb)
reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the name')
let teks = `${text}`
{
if (!Docelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Docelite))
fs.unlinkSync(`./ShadxwMedia/doc/${teks}.pdf`)
reply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
reply(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
break
case 'menu':
let elitemenuoh = `
Hey, ${pushname}
✦◥▅▆▇◤ 𝕄𝔸𝕀ℕ 𝕄𝔼ℕ𝕌 ▇▆▅◥✦
╔════════════════════╗
  ⌘ *Core Commands* ⌘
  • .ping » Bot status
  • .owner » Dev info
  • .help » Command guide
  • .shutdown » Turn off
  • .restart » Reboot bot
  • .backup » Data save
  • .getcase » Debug info
  • .runtime » Uptime
  • .script » View code

  ⌘ *Group Tools* ⌘
  • .promote/.demote
  • .kick/.add » Users
  • .tagall » Mention all
  • .antilink » Guardian
  • .setdesc » Change bio
  • .setppgc » Set group pic
  • .hidetag » Stealth mention
  • .revoke » Reset link
  • .close/.opentime » Group hours

  ⌘ *Media Tools* ⌘
  • .ytmp3/ytmp4 » YT DL
  • .ssweb » Capture sites
  • .getpp » Profile pics
  • .sticker » Convert images
  • .toimage » Convert formats
  • .tomp3 » Audio extract
  • .tovid » Video convert
  • .fliptext » Reverse text

  ⌘ *Database* ⌘
  • .addvideo/.delvideo
  • .addimage/.delimage
  • .addsticker/.delsticker
  • .addvn/.delvn
  • .listvideo » Show media
  • .listapk » Packages

  ⌘ *Automation* ⌘
  • .autoread » ✓
  • .autoreact » 🤖
  • .dnd » 📵 Call block
  • .autobio » Dynamic bio
  • .autoswview » Story viewer

  ⌘ *Utilities* ⌘
  • .translate » 🌐
  • .weather » ☁️
  • .roast » 🔥
  • .gitclone » 💻
  • .clearchat » Purge
  • .swm » Switch mode
  • .bcgc » Broadcast

✦◥▅▅▅▅▅▅▅▅▅▅▅▅▅▅◤✦
> 📡 Version: v1.0 | ⚡Bot by Zephyr-MD`
if (typemenu === 'v1') {
                    EliteProTech.sendMessage(m.chat, {
      video: fs.readFileSync('./ShadxwMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: elitemenuoh,
      contextInfo: {
     forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterName: "ÅRÎSË THÊ SYSTĒM ÃWÂÌTS",
        newsletterJid: "120363399521407327@newsletter",
    },     
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kmdmeu.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: m
                    })
                }
                break
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
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