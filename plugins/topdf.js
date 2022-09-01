const uploadFile = require('../lib/uploadFile') 
 const uploadImage = require('../lib/uploadImage') 
  
  let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
  if (!text) throw `Kirim perintah : ${_p}${command} [nama file]

Contoh : ${_p}${command} ${pickRandom(['Ziv San','Fory'])}`
let fvdocs = {
	key: { 
     fromMe: false, 
     participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', 
     remoteJid: 'status@broadcast', 
   }, 
       message: {
                    documentMessage: {
                    title: 'Nih Kak...\nStay Grateful With Your Life ;3', 
                    jpegThumbnail: await (await fetch('https://telegra.ph/file/824bf7abb11bdded9164a.jpg')).buffer() 
                          }
                        }
                      }
   let q = m.quoted ? m.quoted : m 
   let mime = (q.msg || q).mimetype || '' 
   if (!mime) throw 'Tidak ada media yang ditemukan' 
   if (text.length > 12) throw `terlalu panjang, maksimal 12 karakter!`
   let media = await q.download() 
   let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) 
   let link = await (isTele ? uploadImage : uploadFile)(media) 
   let data =await (await fetch(`https://api.xteam.xyz/imagetopdf?url=${link}&APIKEY=bf8ff984af1506b7`)).buffer() 
 conn.reply(m.chat, '*WAIT! | Mohon Tunggu Sebentar...*', m)
await conn.sendMessage(m.chat, { document: data, mimetype: 'application/pdf', fileName: `${text}` }, { quoted: fvdocs })
 } 
 handler.help = ['topdf <reply image>'] 
 handler.tags = ['tools'] 
 handler.command = /^(topdf)$/i 
  
 handler.limit = true 
  
 module.exports = handler
