let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File Data.json')
   // let seso = await fs.readFileSync('./index.js.data.json') // klo lu run di panel
    let data = await fs.readFileSync('./database.json')
    let user = global.db.data.users[m.sender]
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: 'Get Data Base', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${conn.getName(m.sender)}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    return await conn.sendMessage(m.chat, { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: fkon })
}
handler.help = ['getdb','getdatabase'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(db|getdb)$/i

handler.rowner = true

module.exports = handler
