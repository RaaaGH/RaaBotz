let fetch = require('node-fetch') 
let fs = require('fs')
let handler = async (m, { conn, text, usedPrefix, command }) => { 
	const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": await (await fetch('https://telegra.ph/file/dd124552c49cb0a55bb83.jpg')).buffer(), //Gambarnye
					},
					"title": `Hai ${conn.getName(m.sender)}`, //Kasih namalu 
					"description": `Raa - BOTZ MADE BY CLARAAA ❤️`, 
					"currencyCode": "Rp",
					"priceAmount1000": "500000",
					"retailerId": `ppk`,
					"productImageCount": 999999
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
let res = await (await fetch('https://raw.githubusercontent.com/Alfarqun/database/main/anime/kanna.json'))
 if (!res.ok) throw await `${res.status} ${res.statusText}`; 
 let json = await res.json(); 
 let url = json[Math.floor(Math.random() * json.length)] 
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Kawai >_<', wm, 'NEXT', '.kanna', ftoko, {
    quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Foto Kanna Nya', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Clara Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Clara Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: 'https://bit.ly/3N024o9', thumbnail: await (await fetch('https://telegra.ph/file/42eb819fd76aee00f08a8.jpg')).buffer(),}} 
    })
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
handler.help = ['kanna']
handler.tags = ['internet', 'anime'] 
handler.command = /^(kanna)$/i
handler.limit = true
handler.register = true

handler.limit = true

module.exports = handler
