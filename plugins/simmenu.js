let levelling = require('../lib/levelling') 
 let fs = require('fs') 
 let path = require('path') 
 let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let jimp = require('jimp') 
 let PhoneNumber = require('awesome-phonenumber') 
let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
	let hao = ` 
 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'62895604670507'.split('@')[0]}*` 
  let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('April 5, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    const natal = new Date('December 25, 2022 23:59:59')
    const kapanatal = new Date().getTime() 
    const natalnya = natal - kapanatal
    const nhari = Math.floor( natalnya / (1000 * 60 * 60 * 24));
    const njam = Math.floor( natalnya % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const nmenit= Math.floor( natalnya % (1000 * 60 * 60) / (1000 * 60))
    const mdetek = Math.floor( natalnya % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mode = global.opts['self'] ? 'Private' : 'Public'
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = db.data.users[m.sender]
  let id = m.chat
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let sender = m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
const fkgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "62895604670507-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`RaaBotz MD 🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`,
                 "title": `RaaBotz MD 🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`,
                 'jpegThumbnail': await (await fetch('https://telegra.ph/file/6f11ac2de8d57a1c831c4.jpg')).buffer()
                        }
	                  } 
                     }
                     
                     let tksk = `${pe}${ucapan()}, @${m.sender.split`@`[0]} ${pickRandom(['😅', '🥰', '😜'])}${pe}

●────━───༺༻───━────●
                *《 BOT INFO 》*
⚘ *Bot Name: RaaBotz-MD*
⚘ *Creator: Claraa Chan*
⚘ *Contact Owner Bot*
*http://wa.me/62895604670507*
⚘ *Tanggal: ${date}*  
⚘ *Jam: ${time} WIB*
⚘ *Status: 「 ${mode} 」*
⚘ *Prefix: 「 MULTI PREFIX 」*

●────━───༺༻───━────●
           *《 INFO WAKTU 》*
✧ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
_*${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik*_
✧ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
_*${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik*_ 
✧ 𝙉𝘼𝙏𝘼𝙇
_*${nhari} Hari ${njam} Jam ${nmenit} Menit ${mdetek} Detik*_ 
✧ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍 
_*${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik*_
●────━───༺༻───━────●

❉───────────────────❉
               *《 USER INFO 》*
◦ *Nama: ${name}*
◦ *Status :* ${premium ? 'Premium' : 'Free'} User
◦ *Limit: ${limit}*
◦ *Your Api:* wa.me/${m.sender.split('@')[0]}

             *《 YOUR PROGRESS 》*
◦ *Level: ${level}*
◦ *XP: ${exp}*
◦ *Rank: ${role}*

●────━───༺༻───━────●
             *《 BOT STATUS 》*
❏ *Runtime ${uptime}*
𒍮 *User Register: ${totalreg}*
●────━───༺༻───━────●`

let ftt = `*Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner

 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'62895604670507'.split('@')[0]}*`
       let judul = `${ucapanl()}`.trim() 
       const sections = [
                              {
                                "rows": [{
                                         "title": "📊 › Status ",
                                         "description": "Status カ RaaBotz-MD",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "⚡› Speed ",
                                         "description": "Menampilkan Kecepatan Respon カ RaaBotz-MD",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "🗒️› Info ",
                                         "description": "Menampilkan Info カ RaaBotz-MD",
                                         "rowId": ".info"
                                    }, {
                                         "title": "🎐 › Developer Bot ",
                                         "description": "Kontak Creator Ku",
                                         "rowId": ".owner"
                                    }, {
                                         "title": "❗ › Syarat Dan Peraturan ",
                                         "description": "Budayakan Membaca Sebelum Menggunakan Bot",
                                         "rowId": ".rules"
                                    }, {
                                         "title": "🪙 ›  Leaderboard",
                                         "description": "Cek Posisi Mu",
                                         "rowId": ".lb"  
                                    }, {
                                         "title": "💌 › Group Official Bot",
                                         "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan",
                                         "rowId": ".gcbot"                               
      }],             
                    "title": "▮Status 」"
                }, {
                  "rows": [{
                  "title": "「 💬 」› Semua Perintah",
                  "description": "Menampilkan semua fitur dari bot",
                  "rowId": ".? all"
                }, {              
                  "title": "「 🎮 」› Game ",
                  "description": "Menampilkan fitur dari game",
                  "rowId": ".? game"
                }, {
                  "title": "「 🌱 」› Rpg ",
                  "description": "Menampilkan fitur dari rpg ! ",
                  "rowId": ".? rpg"
                }, {
                  "title": "「 📈 」› Exp & Limit ",
                  "description": "Menampilkan fitur dari xp",
                  "rowId": ".? xp"
                }, {
                  "title": "「 🧩 」› Fun ",
                  "description": "Menampilkan fitur dari fun",
                  "rowId": ".? fun"
                }, {
                  "title": "「 🎁 」› Gift ",
                  "description": "Menampilkan fitur dari gift!",
                  "rowId": ".? gift"
                }, {
                  "title": "「 🔞 」› Nsfw ",
                  "description": "Menampilkan fitur dari nsfw",
                  "rowId": ".? nsfw"
                }, {
                  "title": "「 ⛩️ 」› Anime ",
                  "description": "Menampilkan fitur dari anime",
                  "rowId": ".? anime"
                }, {
                  "title": "「 📰 」› News ",
                  "description": "Menampilkan fitur dari berita",
                  "rowId": ".? News"
                },  {
                  "title": "「 ☪️ 」› Islamic ",
                  "description": "Menampilkan fitur dari islam",
                  "rowId": ".? quran"
                }, {
                  "title": "「 📚 」› Edukasi ",
                  "description": "Menampilkan fitur dari edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "「 🖼️ 」› Random Pict ",
                  "description": "Menampilkan fitur dari foto",
                  "rowId": ".? image"
                },  {
                  "title": "「 🎫 」› Sticker ",
                  "description": "Menampilkan fitur dari sticker",
                  "rowId": ".? stiker"
                }, {
                  "title": "「 🐚 」› Kerang Ajaib",
                  "description": "Menampilkan fitur dari kerang ajaib",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "「 🎵 」› Sound Music ",
                  "description": "Menampilkan fitur dari sound music",
                  "rowId": ".? sound"
                }, { 
                  "title": "「 🎧 」› Random Vn",
                  "description": "Menampilkan fitur dari rendom vn",
                  "rowId": ".? vn"                                                      
                }, {
                  "title": "「 📑 」› Quotes ",
                  "description": "Menampilkan fitur dari random teks",
                  "rowId": ".? quotes"
                }, {
                  "title": "「 🏛️  」› Group Settings ",
                  "description": "Menampilkan fitur dari pengaturan grup",
                  "rowId": ".? admin"
                }, {
                  "title": "「 👥 」› Group ",
                  "description": "Menampilkan fitur dari group",
                  "rowId": ".? grup"
                }, {
                  "title": "「 🌟 」› Premium ",
                  "description": "Menampilkan fitur dari premium",
                  "rowId": ".? premium"
                }, {
                  "title": "「 💻 」› Internet ",
                  "description": "Menampilkan fitur dari internet",
                  "rowId": ".? internet"
                }, {
                  "title": "「 🖊️ 」› Editz Menu ",
                  "description": "Menampilkan fitur dari logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "「 📩 」› Downloader ",
                  "description": "Menampilkan fitur dari download",
                  "rowId": ".? downloader"
                }, {
                  "title": "「 🎭 」›  Anonymous Chat",
                  "description": "Menampilkan fitur dari anonymous chat",
                  "rowId": ".? anonymous"  
                }, {              	
                  "title": "「 🧰 」› Tools ",
                  "description": "Menampilkan fitur dari tools",
                  "rowId": ".? tools"
                }, {
                  "title": "「 📂 」› Database ",
                  "description": "Menampilkan fitur dari database",
                  "rowId": ".? database"
                }, {
                  "title": "「 🗳️ 」› Vote & Absen ",
                  "description": "Menampilkan fitur dari vote",
                  "rowId": ".? vote"
                }, {
                  "title": "「 🎙️ 」› Voice Changer ",
                  "description": "Menampilkan fitur dari voice changer ",
                  "rowId": ".? audio"
                }, {
                  "title": "「 🐾 」› Furry Kawai",
                  "description": "Menampilkan fitur dari random furry ",
                  "rowId": ".? furry"
                }, {
                  "title": "「 ℹ️ 」› Info ",
                  "description": "Menampilkan fitur dari info",
                  "rowId": ".? info"
                }, {
                  "title": "「 ❓ 」› No Category ",
                  "description": "Menampilkan fitur dari tanpa kategori",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "「 👩🏻‍💻 」› Owner ",
                  "description": "Menampilkan fitur dari owner",
                  "rowId": ".? owner"
                }],
                                "title": "▮Category 」"
                                }, {
                                "rows": [{                                	
                                "title": "📝 ∫  Catatan Perubahan ",
                                "description": "Last Update Terakhir Di RaaBotz-MD",
                                "rowId": ".notes"                  
                }],                
                                "title": "▮Last Update 」"
                                }, {
                                "rows": [{                                	
                  "title": "「 🗨️ 」› Raa Chat ",
                  "description": "Mengobrol Dengan Orang Lain",
                  "rowId": ". start"
                }],
                                "title": "▮Anonymous Chat 」"
                                }, {
                                "rows": [{                                	
                                         "title": "📣 › Group Setting ",
                                         "description": "Setting Grup",
                                         "rowId": ".setelangrub" 
                                     }, {
                                         "title": "⚙️ › Bot Setting ",
                                         "description": "Setting Bot",
                                         "rowId": ".botsett" 
                 }],
                                "title": "▮Pengaturan 」" 
                                }, {
                                "rows": [{
                                "title": "🗳️ ∫  Donasi ",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "🔖 ∫  Sewa bot - Premium ",
                                "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium",
                                "rowId": ".sewa"
                                }, {
                                "title": "🌟 ∫  Premium ",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "🔬  ∫  Source Code ",
                                "description": "Menampilkan Source Code Bot",
                                "rowId": ".sc"
                                }, {
                                "title": "💭 ∫  Pertanyaan Tentang Bot Ini ",
                                "description": "Especially WhatsApp users whose numbers start with +212",
                                "rowId": ".QnA"
                                }, {
                                "title": "☎️ ∫  Kata penutup ",
                                "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                                "rowId": ".creator"
                                }], 
                    "title": "▮Info Lainnya 」"
                }, {
                  "rows": [{
                  "title": "🥇「 Contributor 」",
                  "description": "Terima kasih banyak untuk user yang telah berpartisipasi",                  
                  "rowId": ".? thnks"
                       }],
                                "title": "▮Thanks To  」"
                            }
           ] 
    const listMessage = {
      text: `Hai Kak ${name} Pilih Menu Dibawah Ini Yah Kak`.trim(),
      footer: 'Tetap Follow Terus Bot Yah Kak >//<',
      title: judul,
      buttonText: "Pilih Disini",
      sections
    }
     await conn.send3ButtonLoc(m.chat, await conn.resize(await genProfile(conn, m), 300, 180), tksk, ftt, 'RENT', '.sewa', 'OWNER', '.owner', 'CREDITS', '.tqto', m)
     //await conn.send3ButtonLoc(m.chat, await conn.resize(pp, 300, 300), tksk, ftt, 'RENT', '.sewa', 'OWNER', '.owner', 'CREDITS', '.tqto', m)
    return conn.sendMessage(m.chat, listMessage, { quoted: fkgif, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }
handler.help = ['simplemenu']
handler.tags = ['main']
handler.command = /^(simplemenu)$/i
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
 handler.exp = 3 
  
 module.exports = handler 
  
 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
 function ucapan() { 
   const time = moment.tz('Asia/Jakarta').format('HH') 
   res = "Selamat dinihari" 
   if (time >= 4) { 
     res = "Selamat pagi" 
   } 
   if (time > 10) { 
     res = "Selamat siang" 
   } 
   if (time >= 15) { 
     res = "Selamat sore" 
   } 
   if (time >= 18) { 
     res = "Selamat malam" 
   } 
   return res 
 } 
 function ucapanl() {
    const timel = moment.tz('Asia/Jakarta').format('HH')
    resl = "Selamat dinihari 🎑"
    if (timel >= 4) {
        resl= "Good Morning 🌅"
    }
    if (timel > 10) {
        resl = "Good Afternoon 🏞️"
    }
    if (timel >= 15) {
        resl = "Good Afternoon 🌇"
    }
    if (timel >= 18) {
        resl = "Good Evening 🌃"
    }
    return resl
}
  
 //By fahri adison = https://github.com/FahriAdison 
  
  async function genProfile(conn, m) { 
   let font = await jimp.loadFont('./name.fnt'), 
     mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await jimp.read(thumbnailUrl.getRandom()), 
     avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
  
     await welcome.print(font, 550, 180, 'Name:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'About:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Number:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
 }
