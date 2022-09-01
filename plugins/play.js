let yts = require('yt-search') 
 let fetch = require('node-fetch') 
 const { servers, yta, ytv } = require('../lib/y2mate') 
 let handler = async (m, { conn, command, usedPrefix, text, isPrems, isOwner }) => { 
   if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} i see your monster` 
   let chat = global.db.data.chats[m.chat] 
   let results = await yts(text) 
   let vid = results.all.find(video => video.seconds < 3600) 
   if (!vid) throw 'Video/Audio Tidak ditemukan' 
   let isVideo = /2$/.test(command) 
   let yt = false 
   let usedServer = servers[0] 
   for (let i in servers) { 
     let server = servers[i] 
     try { 
       yt = await yta(vid.url, server) 
       yt2 = await ytv(vid.url, server) 
       usedServer = server 
       break 
     } catch (e) { 
       m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`) 
     } 
   } 
   if (yt === false) throw 'semua server gagal' 
   if (yt2 === false) throw 'semua server gagal' 
   let { dl_link, thumb, title, filesize, filesizeF } = yt 
   await conn.send3ButtonLoc(m.chat, await conn.resize(thumb, 280, 210), ` 
 *💌 Judul:* ${title}
*🎶 Audio:* ${filesizeF}
*🎥 Video:* ${yt2.filesizeF}
*💻 Server y2mate:* ${usedServer}
*⛓️ Link Video:* ${vid.url}
  `.trim(), wm, `🎙️ Audio`, `.yta ${vid.url}`, `🎥 Video`, `.yt ${vid.url}`, '🔎 YouTube Search', `.yts ${title}`, m) 
 } 
 handler.help = ['play'].map(v => v + ' <pencarian>') 
 handler.tags = ['downloader'] 
 handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i 
  
 handler.exp = 3 
 handler.limit = false 
 handler.register = false 
  
 module.exports = handler
