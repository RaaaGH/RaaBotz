let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {

  let res = await (await fetch(`https://raw.githubusercontent.com/Z-zxQ/Asupan/main/cecan/${command}.json`)).json()
  let json = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, json.url, `Cwe gw nih boss!!`, wm, 'Get Again', `${usedPrefix + command}`, m, false)
}
handler.help = [ 'indonesia', 'malaysia', 'thailand', 'vietnam', 'china', 'korea', 'japan']
handler.tags = ['random', 'asupan']
handler.command = /^(Indonesia|malaysia|thailand|vietnam|china|korea|japan)$/i

handler.register = true

module.exports = handler
