let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/3d150b20dbe58f043ca8b.jpg')).buffer(), 300, 200),  //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
 	const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Pemilik Bot`, 
                     "description": "Nomor Pemilik Bot (owner)", 
                     "rowId": `${usedPrefix}creator` 
                   }, { 
                     "title": "Syarat Ketentuan dan Peraturan", 
                     "description": "Harap membaca Peraturan demi kenyamanan kita bersama", 
                     "rowId": `${usedPrefix}rules` 
                   }, { 
                     "title": "Group Official Cute Bot", 
                     "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Informasi Bot" 
                 }, { 
                   "rows": [{ 
                     "title": `Free Trial 1 Hari`, 
                     "description": "Masukkan bot secara gratis selama 1 Hari", 
                     "rowId": `${usedPrefix}join` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `Permanent! Rp5.000`, 
                       "description": "Masukkan bot ke dalam group tanpa batasann waktu!", 
                       "rowId": ".masuk"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ SEWA BOT*
Untuk fitur bot bisa baca menu sampai selesai ya kak, dicoba coba dulu biar tau ( Ketik *.menu* )
Silahkan hubungi owner ( Ketik *.owner* ) jika ingin menyewa bot untuk grup chat kalian

➠ Sewa (Join Grup) harga 5K / Permanent dan apabila bot di kick dari grup sengaja atau tidak sengaja tidak bisa di join kan lagi (Hangus).
➠ Pembayaran saat ini hanya tersedia via Gopay/Dana.
➠ Proses transaksi seperti pada umumnya, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.
➠ *Penting!* simpan nomor owner dan join ke dalam grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.
➠ Bot bisa di pindah pindah Grup (berlaku untuk yang sewa) kedalam grup lain (hanya 1 grup)
➠ Maaf untuk yang sudah Transfer tidak dapat di Refund/dibatalkan
➠ Membeli/Sewa berarti Setuju dalam Persyaratan tersebut`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
 handler.help = ['sewa'] 
 handler.tags = ['main'] 
 handler.command = /^sewa|sewabot$/i 
 module.exports = handler 
  
 module.exports = handler 
 function ucapan() { 
     const time = moment.tz('Asia/Jakarta').format('HH') 
     res = "Selamat dinihari" 
     if (time >= 4) {  
         res = "Selamat pagi 🌄" 
   } 
   if (time > 10) { 
     res = "Selamat siang ☀️" 
   } 
   if (time >= 15) { 
     res = "Selamat sore 🌇" 
   } 
   if (time >= 18) { 
     res = "Selamat malam 🌙" 
     } 
     return res 
 }
