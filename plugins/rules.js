let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonImg(m.chat, await (await fetch(fla+ 'Rules')).buffer(),`
*Rules Bot*:
1. Dilarang telp/vc bot
2. Harap beri jeda saat menggunakan bot (jangan spam)
3. Dilarang mengeksploitasi bot
4. Dilarang menjual belikan bot, sebab bot ini free untuk digunakan (kecuali memasukkan ke dalam group)
5. Bot tidak menyimpan data user
6. Kami tidak bertanggung jawab atas apa yg user lakukan kepada bot ataupun sebaliknya
7. Hindari konten pornografi (berupa gambar, dokumen, video, dan stiker)
8. Bot yang sudah dikick dari group berarti masa sewa habis

*Kebijakan Privasi:*
 1. bot tidak akan merekam data riwayat chat user. 
 2. bot tidak akan menyebarkan nomor users. 
 3. bot tidak akan menyimpan media yang dikirimkan oleh users. 
 4. bot tidak akan menyalah gunakan data data users. 
 5. Owner bot berhak melihat data riwayat chat users. 
 6. Owner bot berhak melihat status users. 
 7. Owner bot dapat melihat riwayat chat, dan media yang dikirimkan users.
 
 Syarat Ketentuan Bot 
 1. Bot akan keluar dari group apabila sudah waktunya keluar. 
 2. bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak. 
 3. bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.* 
 4. bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan. 
 5. bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

Tahulah berterimakasih sebab anda tidak perlu membayar untuk menggunakan bot ini, gunakan secara bijak, jangan berlebihan.

Be a smart user and good luck!
`.trim(), 'Kebijakan ©2022 By Clara Chan', '⋮☰ Menu', '.menu', 'Owner', '.nowner', 'Donasi', '.donasi', m, {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: 'Harap patuhin peraturan tersebut yah kak >~<',
            body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
            description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/b412e4dd6391692d975d3.jpg')).buffer(),
         mediaUrl: `https://www.instagram.com/inizenscuy/`
        }
     }
    })
handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(snk|syarat|peraturan|rules)$/i

module.exports = handler

let wm = global.botwm
