let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} Colin Changed`, m)

  await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/32941eaaf37aa9d7a2295.jpg', 'Searching...', wm2, 'Owner', '.owner', m)
    let res = await fetch(`https://botcahx-rest-api.herokuapp.com/api/search/pinterest?text=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let data = json.result
    let index = Math.floor(Math.random() * data.length)
    let object = data[index]
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Search Pinterest 🔍`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/f13cee700cf48fdda942d.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.sendButtonImg(m.chat, object, `Nih Kak @${m.sender.split`@`[0]}`, wm, 'Get Again', `!pinterest ${text}`, m, {
    quoted: ftrol, contextInfo: { forwardingScore: 99999, isForwarded: true,
         externalAdReply: { 
             title: global.wm,
             body: 'Apa Benar Ini Yang Ada Cari?',
             description: 'Apa Benar Ini Yang Ada Cari?', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/8b361a592d4ee626cc70d.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.help = ['pinterest <keyword>'] 
 handler.premium = true 
 handler.tags = ['downloader'] 
 handler.command = /^(pinterest)$/i 
  
 module.exports = handler
