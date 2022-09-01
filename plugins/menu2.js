let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
 let locale = 'id' 
  let d = new Date(new Date + 3600000) 
   let _uptime = process.uptime() * 1000 
   let uptime = clockString(_uptime) 
   let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
      let caption = ` ┌━––「 ˚DAFTAR MENU 」––━┈▧ 
 │◦〉  ${_p}? all   
 │◦〉  ${_p}? absen  
 │◦〉  ${_p}? rpg  
 │◦〉  ${_p}? anime  
 │◦〉  ${_p}? downloader  
 │◦〉  ${_p}? game  
 │◦〉  ${_p}? fun  
 │◦〉  ${_p}? xp  
 │◦〉  ${_p}? github  
 │◦〉  ${_p}? group  
 │◦〉  ${_p}? image  
 │◦〉  ${_p}? quotes  
 │◦〉  ${_p}? admin  
 │◦〉  ${_p}? info  
 │◦〉  ${_p}? internet  
 │◦〉  ${_p}? islam  
 │◦〉  ${_p}? kerang  
 │◦〉  ${_p}? maker  
 │◦〉  ${_p}? sound  
 │◦〉  ${_p}? vn  
 │◦〉  ${_p}? furry  
 │◦〉  ${_p}? owner  
 │◦〉  ${_p}? suara  
 │◦〉  ${_p}? premium  
 │◦〉  ${_p}? quotes  
 │◦〉  ${_p}? info  
 │◦〉  ${_p}? stalk  
 │◦〉  ${_p}? shortlink  
 │◦〉  ${_p}? sticker  
 │◦〉  ${_p}? tools  
 │◦〉  ${_p}? nsfw  
 │◦〉  ${_p}? asupan  
 │◦〉  ${_p}? random  
 │◦〉  ${_p}? text 
 │◦〉  ${_p}? textpro  
 │◦〉  ${_p}? photooxy 
 ╰━–━–━–━–━–⊙–━–━–━–━┈▧` 
      await conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/f32f779ce8eaf70158228.jpg')).buffer(), caption, `ıll Runtime : ${uptime}\nlıl Tanggal : ${week} ${date}`, 'Donasi', `.donasi`, 'Owner', '.owner', m) 
  }  
  handler.help = ['menu2'] 
  handler.tags = ['main']  
  handler.command = /^(menu2)$/i  
    
  module.exports = handler 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }
