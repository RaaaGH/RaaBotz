let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `NENEN NENEN KEPENGEN NENEN SAMA ${text}. TETEK GEDE NAN KENCANG MILIK ${text} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${text}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${text}. BIARKAN AKU MENGENYOT NENENMU ${text}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII`
              conn.send3Button(m.chat, awikwok, wm, `Simp`, `.simp ${text}`, `Sherk`, `.sherk ${text}`, `Wangy`, `.wangy ${text}`,  {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '\nBaka Kyaaa >//<\n', 
                    jpegThumbnail: await conn.resize(await (await fetch(fla + 'Yamete')).buffer(), 300, 200), 
                          }
                        }
                      })
}
handler.help = ['nenen <pasangan>']
handler.tags = ['fitnah']
handler.command = /^nenen/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
