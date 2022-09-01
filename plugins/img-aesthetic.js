let fetch = require("node-fetch") 
 let handler = async (m, usedPrefix, command) => { 
  let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/aesthetic.json`) 
 let f = await g.json() 
 let a = f[Math.floor(Math.random() * f.length)] 
 conn.sendButtonImg(m.chat, a, "Random Image", "Wallpaper Aesthetic", 'Next', ".wpaesthetic", m,  { 
     quoted: m, 
         contextInfo: { forwardingScore: 99999, isForwarded: true, 
         externalAdReply: { 
                 sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/', 
             title: global.ucapan ,
             body: '© Cute IQ-MD By Ziv San', 
           thumbnail: await (await fetch('https://telegra.ph/file/f05029f17de62fb420459.jpg')).buffer() 
         } 
      } 
     }) 
  }  
 handler.help = ['wpaesthetic'] 
 handler.tags = ['image'] 
 handler.command = /^wpaesthetic$/i 
  
 module.exports = handler
