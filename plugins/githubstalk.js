let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

  await m.reply('Searching...')
    let res = await fetch(`https://hadi-api.herokuapp.com/api/githubstalk?username=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.avatar)).buffer()
    let hasil = `*───── 「 GITHUB STALK 」──────*

➸ *Bio*: ${json.result.bio}
➸ *Perusahaan*: ${json.result.company}
➸ *Email:* ${json.result.email}
➸ *Twitter:* ${json.result.twiter_username}
➸ *Repo Publik:* ${json.result.public_repo}
➸ *Gists Publik:* ${json.result.public_gists}
➸ *Follower:* ${json.result.follower}
➸ *Following:* ${json.result.following}
➸ *Lokasi:* ${json.result.location}
➸ *Type:* ${json.result.Type}
`

    await conn.sendButtonLoc(m.chat, await conn.resize(thumb, 300, 300), hasil.trim(), wm, 'Okey', '0', m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['stalk']
handler.command = /^(githubstalk)$/i

module.exports = handler
