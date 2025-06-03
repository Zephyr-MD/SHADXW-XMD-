const fs = require('fs')
const chalk = require('chalk')

//Contact details
global.ownernomer = "2349138538601"
global.ownername = "LUFFY-LANG"
global.ytname = "YT: ZEPHYR-MD"
global.socialm = "GitHub: Zephyr-MD"
global.location = "Port Harcourt, Rivers"

global.ownernumber = '2349138538601'  //creator number
global.ownername = 'Zephyr-MD' //owner name
global.botname = 'SHADXW-XMD' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'SHADXW-XMD\n\nContact: 2349138538601'

//console view/theme
global.themeemoji = '🌚'
global.wm = "Youtube @ZEPHYR-MD"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

global.typemenu = 'v1'
//Reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./ShadxwMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})