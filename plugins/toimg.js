let handler = function (m) {
    let { chat, fromMe, id, isBaileys, pler } = m.quoted
 if (!pler) m.reply(`ENG: Reply the message you want to delete.\n\nID: Balas pesan yang ingin nte hapus.`)
 
  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })

}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^(deladm)?$/i
handler.limit = true
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
