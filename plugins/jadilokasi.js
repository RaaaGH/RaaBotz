let { MessageType } = require('@adiwajshing/baileys')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  if (/image|video/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    conn.sendButtonLoc(m.chat, await conn.resize(img ,300, 300), `📮 *L I N K :* ${link}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* ${isTele ? 'No Expiry Date' : '(Tidak diketahui)'}`, wm, 'Owner', '.owner', m)
  } else conn.sendButton(m.chat, 'Tag foto/videonya!!', wm, 'Menu', '#Menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: wm, itemCount: 999, thumbnail: await (await fetch('https://telegra.ph/file/deddcdba4caf3c8509295.jpg')).buffer()
}}})
}

handler.help = ['jadilokasi']
handler.tags = ['tools']
handler.command = /^(jadilokasi)$/i

module.exports = handler
