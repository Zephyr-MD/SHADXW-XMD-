// myfunction.js
import baileys from '@whiskeysockets/baileys'; // Default import
const { proto } = baileys; // Destructure proto

export const smsg = (conn, m, store) => {
  if (!m) return m;
  const M = proto.WebMessageInfo; // Now works
  
  return {
    ...m,
    m,
    body: m.message?.conversation || 
          m.message?.extendedTextMessage?.text || 
          '',
    sender: m.key?.remoteJid?.endsWith('@s.whatsapp.net') ? 
            m.key.remoteJid : 
            conn.user.jid,
    from: m.key?.remoteJid,
    chat: m.key?.remoteJid,
    isGroup: m.key?.remoteJid?.endsWith('@g.us'),
    reply: async (text, opts = {}) => {
      return conn.sendMessage(
        m.key.remoteJid, 
        { text: text }, 
        { ...opts, quoted: m }
      );
    },
    mentioned: (m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [])
               .filter(Boolean),
    command: (prefix = '.') => {
      const text = (m.message?.conversation || 
                   m.message?.extendedTextMessage?.text || 
                   '').trim();
      return text.startsWith(prefix) ? 
             text.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : 
             null;
    },
    args: (prefix = '.') => {
      const text = (m.message?.conversation || 
                   m.message?.extendedTextMessage?.text || 
                   '').trim();
      return text.startsWith(prefix) ? 
             text.slice(prefix.length).trim().split(/ +/) : 
             [];
    }
  };
};

export const formatPhone = (number) => {
  return number
    .replace(/[^0-9]/g, '')
    .replace(/(\d+)(\d{3})(\d{3})(\d{4})/, '+$1 $2-$3-$4');
};