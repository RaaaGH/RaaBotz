const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
	let namae = conn.getName(m.sender)
	let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sn = createHash('md5').update(m.sender).digest('hex')
	let flu = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
	let fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
    let ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `📮 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await conn.resize(await (await fetch(flu + 'VERIFY')).buffer(), 300, 200), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    } 
    }
    let fz = {
	key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "120363039290101063@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": `Hmm`,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': `「 RUNTIME BOT 」
⏲️ Waktu: ${time} WIB
💌 Aktif Selama : ${uptime}`, 'jpegThumbnail': await (await fetch('https://telegra.ph/file/7cac84df0437232734f8a.jpg')).buffer()
                          }
                        }
                      }
let judul = ''
 	       const sections = [
	{
	title: "Select Your Age Here !",
	rows: [
	    {title: "Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "O L D",
	rows: [
	    {title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Years", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Y O U N G",
	rows: [
	    {title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]
         const listMessage = {
      text: `*──── 「 NOT REGISTERED 」 ────*
      
📮 Silahkan Pilih Umur Anda!
📛 Bisa Juga Dengan Cara Di Bawah

「 *CONTOH* 」
✦ .daftar namamu.umurmu
✦ .daftar ZivSan.18`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "VERIFY",
      sections
    }
  let user = global.db.data.users[m.sender]
  if (user.registered === true) return conn.sendButtonDoc(m.chat, `@${m.sender.split`@`[0]} Kamu sudah terdaftar! mau daftar ulang?`, wm, 'Iya', '.unreg ' + sn, m, {
    quoted: fz,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: wm + ' 🍃',
            body: `💌 Aktif Selama : ${uptime}`,
          thumbnail: await (await fetch('https://telegra.ph/file/66091207727c1a856997c.jpg')).buffer()
        }
     }
    })
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: ftrol, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngen ngep:v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
let hao = `ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)

*Registered In Database*
*Supported By @${global.owner[0].split('@')[0]}*` 
  conn.sendButtonLoc(m.chat, await conn.resize(await (await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(), 300, 200),  `
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
┗────···

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${usedPrefix}sn* untuk mengecek *SN* kamu! 
`.trim(), wm, `Profile`,`${prefix}pp`, m) 
conn.sendButtonLoc(m.sender, await conn.resize(await (await fetch(fla + 'Registered')).buffer(), 300, 200), `Terimakasih Telah Daftar Di Data Base Bot

*SN:* ${sn}`, hao, `SN`,`${prefix}sn`, m) 
   conn.verify = conn.verify ? conn.verify : {} 
    user = DATABASE.data.home 
    kode = Math.floor(Math.random() * 9999) 
 let ziv = '```'
 let hauo = `Reply Pesan Ini Atau Dan Balas Pesan Ini Untuk Verifikasi! Kode Di Pesan Di Bawah Ini
Seluruh informasi kamu (no. handphone dan password) adalah rahasia. Jangan pernah berikan informasi tersebut kepada siapa pun. Cute Bot tidak pernah meminta informasi rahasia dari kamu.

Your true data registered powered
*Supported By @${global.owner[0].split('@')[0]}*` 
    aww = await conn.sendButtonLoc(m.sender, 'https://telegra.ph/file/51fa80b60e45651dee465.jpg', `Welcome to Cute Bot ! Please confirm your account using the following code:

${ziv}${kode}${ziv}
`, hauo, 'Owner', `.owner`, m) 
      conn.verify[m.sender] = { code: kode, key: aww.key.id } 
}

handler.all = async m => { 
      if (!conn.verify) return 
      if (!m.quoted) return 
     if ((m.sender in conn.verify) == false) return 
     if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) { 
     conn.sendButton(m.chat, '```Register Success```', '', 'Menu', '#menu', m ) 
     DATABASE.data.home[m.sender].registered = true 
     delete conn.verify[m.sender] 
    } 
 } 
handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
