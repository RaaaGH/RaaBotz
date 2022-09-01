let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = 'format salah, example: ' +usedPrefix+command+ ' Aine|1. Masak'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Judul tidak tersedia!\n\nAlasan: Sudah digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/7989b4e60a9dedfcdbbec.jpg', `Catatan berhasil dibuat!\nUntuk melihat catatan. Ketik: ${usedPrefix}lihatcatatan`, wm, 'Liat Catatan', '.lihatcatatan', m)
}

handler.help = ['buatcatatan <title|isi>']
handler.tags = ['tools']
handler.command = /^buatcatatan$/i

module.exports = handler
