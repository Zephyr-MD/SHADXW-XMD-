import baileys from '@whiskeysockets/baileys';
import config from '../settings/config.js';
import os from 'os';
import fetch from 'node-fetch';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

const { proto } = baileys;
const execAsync = promisify(exec);
const deletedMessages = new Map();

// ======================
// HELPER FUNCTIONS
// ======================
const formatUptime = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${days}d ${hours}h ${minutes}m`;
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

const createProgressBar = (percentage) => {
  const bars = ['🟥','🟧','🟨','🟩'];
  const index = Math.min(Math.floor(percentage * 4), 3);
  return bars.slice(0, index + 1).join('') + '⬜️'.repeat(3 - index);
};

const scheduleCleanup = (path) => {
  setTimeout(() => {
    fs.rmSync(path, { recursive: true, force: true });
  }, 86400000);
};

// ======================
// MAIN HANDLER
// ======================
export default async (conn, m, chatUpdate, store) => {
  try {
    // ======================
    // ANTI-DELETE SYSTEM
    // ======================
    if (chatUpdate.messages?.length) {
      const msg = chatUpdate.messages[0];
      if (!msg.key.fromMe || config.ANTI_DELETE) {
        deletedMessages.set(msg.key.id, {
          message: msg.message,
          sender: msg.key.participant || msg.key.remoteJid
        });
      }
    }

    if (m?.message?.protocolMessage?.type === 1) {
      if (config.ANTI_DELETE) {
        const deletedKey = m.message.protocolMessage.key.id;
        const deletedMsg = deletedMessages.get(deletedKey);
        if (deletedMsg) {
          await conn.sendMessage(
            m.key.remoteJid,
            { 
              text: `🗑️ Deleted message from @${deletedMsg.sender.split('@')[0]}:\n${
                deletedMsg.message?.conversation || 
                deletedMsg.message?.imageMessage?.caption || 
                '[Media]'
              }`,
              mentions: [deletedMsg.sender]
            }
          );
          deletedMessages.delete(deletedKey);
        }
      }
      return;
    }

    // ======================
    // COMMAND PROCESSING
    // ======================
    const body = m.body?.trim() || '';
    const currentPrefix = config.PREFIX || '.';
    const isCmd = body.startsWith(currentPrefix);
    const isOwner = [config.OWNER_NUMBER, conn.user.id].includes(m.sender);
    const isGroup = m.key.remoteJid.endsWith('@g.us');

    if (!isCmd || m.key.remoteJid === 'status@broadcast') return;

    const [command, ...args] = body.slice(currentPrefix.length).split(/ +/);
    const text = args.join(' ');
    const quoted = m.quoted;
    const mentionedJid = m.mentionedJid || [];

    // ======================
    // GROUP MANAGEMENT
    // ======================
    if (isGroup) {
      const metadata = await conn.groupMetadata(m.chat);
      const participants = metadata.participants;
      const isBotAdmin = participants.find(p => p.id === conn.user.id)?.admin === 'admin';
      const isAdmin = participants.find(p => p.id === m.sender)?.admin === 'admin';

      // Promote
      if (command === 'promote') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        if (!isBotAdmin) return m.reply(config.MESSAGES.BOT_ADMIN);
        if (!mentionedJid.length) return m.reply('Tag user!');
        
        await conn.groupParticipantsUpdate(m.chat, mentionedJid, 'promote');
        return conn.sendMessage(m.chat, { 
          text: `👑 @${mentionedJid[0].split('@')[0]} promoted!`,
          mentions: mentionedJid
        });
      }

      // Demote
      if (command === 'demote') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        if (!isBotAdmin) return m.reply(config.MESSAGES.BOT_ADMIN);
        if (!mentionedJid.length) return m.reply('Tag admin!');
        
        await conn.groupParticipantsUpdate(m.chat, mentionedJid, 'demote');
        return conn.sendMessage(m.chat, { 
          text: `📉 @${mentionedJid[0].split('@')[0]} demoted!`,
          mentions: mentionedJid
        });
      }

      // Kick
      if (command === 'kick') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        if (!isBotAdmin) return m.reply(config.MESSAGES.BOT_ADMIN);
        const targets = mentionedJid.length ? mentionedJid : [m.sender];
        
        await conn.groupParticipantsUpdate(m.chat, targets, 'remove');
        return conn.sendMessage(m.chat, { 
          text: `🚫 @${targets[0].split('@')[0]} removed!`,
          mentions: targets
        });
      }

      // Add
      if (command === 'add') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        const numbers = text.match(/[0-9]+/g)?.map(num => `${num}@s.whatsapp.net`);
        if (!numbers?.length) return m.reply('Provide numbers!');
        
        await conn.groupParticipantsUpdate(m.chat, numbers, 'add');
        return m.reply(`✅ Added ${numbers.length} users!`);
      }

      // Link
      if (command === 'link') {
        const code = await conn.groupInviteCode(m.chat);
        return m.reply(`🔗 Group link:\nhttps://chat.whatsapp.com/${code}`);
      }

      // Subject
      if (command === 'subject') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        await conn.groupUpdateSubject(m.chat, text);
        return m.reply(`📛 New group name: ${text}`);
      }

      // Description
      if (command === 'desc') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        await conn.groupUpdateDescription(m.chat, text);
        return m.reply(`📝 Description updated!`);
      }

      // Announce
      if (command === 'announce') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        const state = text === 'on' ? 7 : 0;
        await conn.groupToggleEphemeral(m.chat, state);
        return m.reply(`📢 Announcements ${text === 'on' ? 'enabled' : 'disabled'}!`);
      }

      // Reset Link
      if (command === 'reset') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        await conn.groupRevokeInvite(m.chat);
        return m.reply('🔄 Link reset!');
      }

      // Tagall
      if (command === 'tagall') {
        if (!isAdmin) return m.reply(config.MESSAGES.ADMIN_ONLY);
        const mentions = participants.map(p => `@${p.id.split('@')[0]}`);
        return conn.sendMessage(m.chat, { 
          text: `📢 Mentioning all:\n${mentions.join(' ')}`,
          mentions: participants.map(p => p.id)
        });
      }
    }

    // ======================
    // PING COMMAND
    // ======================
    if (command === 'ping') {
      const start = Date.now();
      const msg = await m.reply('⚡ Calibrating...');
      const latency = Date.now() - start;
      const uptime = process.uptime();
      const ramTotal = os.totalmem();
      const ramUsed = ramTotal - os.freemem();
      const cpuLoad = os.loadavg()[0].toFixed(1);

      await conn.sendMessage(m.chat, {
        text: `
╭──「 *${config.BOT_NAME} STATUS* 」─
│⚡ Latency: ${latency}ms
│${createProgressBar(1 - Math.min(latency/500, 1))}
│💾 RAM: ${formatBytes(ramUsed)}/${formatBytes(ramTotal)}
│${createProgressBar(ramUsed/ramTotal)}
│🔧 CPU: ${cpuLoad}%
│⏳ Uptime: ${formatUptime(uptime)}
│📦 Version: v2.4.0
╰──「 🔒 ${config.MODE.toUpperCase()} 」`.trim(),
        mentions: [m.sender],
        contextInfo: {
          externalAdReply: {
            title: 'PERFORMANCE METRICS',
            thumbnail: await (await fetch(config.DOWNLOAD_IMAGE)).buffer()
          }
        }
      }, { quoted: m });
      await conn.sendMessage(m.chat, { delete: msg.key });
    }

    // ======================
    // VV COMMAND
    // ======================
    if (command === 'vv') {
      if (!quoted?.message?.viewOnceMessageV2) return m.reply('Reply to view-once media!');
      
      try {
        const mediaData = quoted.message.viewOnceMessageV2.message;
        const mediaType = Object.keys(mediaData)[0].replace('Message', '').toLowerCase();
        const buffer = await conn.downloadMediaMessage(quoted);
        
        return conn.sendMessage(m.chat, {
          [mediaType]: buffer,
          caption: `🔓 ${config.BOT_NAME} Media Converter`
        }, { quoted: m });
      } catch (error) {
        console.error('VV Error:', error);
        return m.reply('Failed to convert media!');
      }
    }

    // ======================
    // GITCLONE COMMAND
    // ======================
    if (command === 'gitclone' && isOwner) {
      if (!text) return m.reply('Provide GitHub URL!');
      const wantsZip = text.includes('--zip');
      const repoUrl = text.replace('--zip', '').trim();

      try {
        const urlMatch = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!urlMatch) return m.reply('❌ Invalid GitHub URL!');

        const [_, user, repo] = urlMatch;
        const timestamp = Date.now();
        const repoDir = `./cloned-repos/${repo}_${timestamp}`;
        const statusMsg = await m.reply(wantsZip ? '📦 Preparing ZIP...' : '⬇️ Cloning...');

        if (wantsZip) {
          const apiUrl = `https://api.github.com/repos/${user}/${repo}`;
          const apiRes = await fetch(apiUrl);
          const { default_branch = 'main' } = await apiRes.json();
          const zipUrl = `${repoUrl}/archive/refs/heads/${default_branch}.zip`;

          const res = await fetch(zipUrl);
          if (!res.ok) throw new Error(`Failed to fetch ZIP (${res.status})`);
          
          const buffer = await res.buffer();
          fs.writeFileSync(`${repoDir}.zip`, buffer);
          await conn.sendMessage(m.chat, {
            document: buffer,
            fileName: `${repo}.zip`,
            mimetype: 'application/zip'
          }, { quoted: m });
          scheduleCleanup(`${repoDir}.zip`);
        } else {
          await execAsync(`git clone ${repoUrl} ${repoDir} --depth 1`);
          await execAsync(`zip -r ${repoDir}.zip ${repoDir}`);
          const zipBuffer = fs.readFileSync(`${repoDir}.zip`);
          await conn.sendMessage(m.chat, {
            document: zipBuffer,
            fileName: `${repo}.zip`,
            mimetype: 'application/zip'
          }, { quoted: m });
          scheduleCleanup(repoDir);
          scheduleCleanup(`${repoDir}.zip`);
        }

        await conn.sendMessage(m.chat, { delete: statusMsg.key });
      } catch (error) {
        console.error('GitClone Error:', error);
        await conn.sendMessage(m.chat, {
          text: `❌ Failed: ${error.message}`,
          edit: statusMsg.key
        });
      }
    }

    // ======================
    // BOT SETTINGS
    // ======================
    if (command === 'mode' && isOwner) {
      config.MODE = text.toLowerCase() === 'private' ? 'private' : 'public';
      return m.reply(`🛠️ Mode: ${config.MODE.toUpperCase()}`);
    }

    if (command === 'setprefix' && isOwner) {
      if (!text) return m.reply('Enter new prefix!');
      config.PREFIX = text[0];
      return m.reply(`🔧 Prefix: ${config.PREFIX}`);
    }

    // ======================
    // HELP MENU
    // ======================
    if (command === 'menu' || command === 'help') {
      return conn.sendMessage(m.chat, {
        image: { url: config.MENU_IMAGE },
        caption: `
╔══════════════════════╗
║   🚀 ${config.BOT_NAME} MENU   ║
╠══════════════════════╣
║                                     
║  🔧 *CORE COMMANDS*        
║  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  
║  ⌲ ${config.PREFIX}ping - Bot status
║  ⌲ ${config.PREFIX}menu - This help
║                                     
║  👥 *GROUP COMMANDS*       
║  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  
║  ⌲ ${config.PREFIX}promote @user
║  ⌲ ${config.PREFIX}demote @user  
║  ⌲ ${config.PREFIX}kick @user    
║  ⌲ ${config.PREFIX}add [numbers]
║  ⌲ ${config.PREFIX}link - Group invite
║                                     
║  🎨 *MEDIA TOOLS*          
║  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  
║  ⌲ ${config.PREFIX}vv - View-once
║                                     
║  ⚙️ *OWNER COMMANDS*       
║  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  
║  ⌲ ${config.PREFIX}mode [public/private]
║  ⌲ ${config.PREFIX}setprefix [char]
║  ⌲ ${config.PREFIX}gitclone [url]
║                                     
║  🔒 Anti-Delete: ${config.ANTI_DELETE ? '✅ ON' : '❌ OFF'}
║                                     
╚══════════════════════╝
${config.FOOTER_TEXT}`.trim(),
        templateButtons: [{
          urlButton: {
            displayText: '📢 View Channel',
            url: config.GROUP_CHAT_LINK
          }
        }]
      });
    }

  } catch (error) {
    console.error('Global Error:', error);
    conn.sendMessage(m.chat, {
      text: `${config.MESSAGES.ERROR}\n${error.message}`
    });
  }
};