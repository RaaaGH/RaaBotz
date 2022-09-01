let handler = async (m, { conn, participants }) => { 
  
         let now = new Date() * 1 
         let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]) 
     let txt = '' 
     // let tolgp = `${participants.lenght}` 
      
     for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats))  
     txt += `
🎐 ${await conn.getName(jid)}\n🌱 ${jid} ${chat?.metadata?.read_only ? 'Left' : 'Joined'}\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = { 
       isBanned: false, 
       welcome: false, 
       antiLink: false, 
       delete: true, 
     } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : '*Tidak Diatur Expired Group*'} 
 
${db.data.chats[jid].isBanned ? '✅' : '❌'}  _Group Banned_
${db.data.chats[jid].welcome ? '✅' : '❌'}  _Auto Welcome_ 
${db.data.chats[jid].antiLink ? '✅' : '❌'}  _Anti Link_\n\n` 
     conn.sendButtonLoc(m.chat, await conn.resize(fla + 'Gruop List', 300, 300),`💌 List Groups: 
📮 Total Group: ${groups.length} 
 ${txt}`, wm, 'Owner', '.owner', m)
  
 } 
  
 handler.help = ['grouplist'] 
 handler.tags = ['group'] 
  
 handler.command = /^(group(s|list)|(s|list)group)$/i 
  
  
 module.exports = handler 
  
 function msToDate(ms) { 
   temp = ms 
   days = Math.floor(ms / (24 * 60 * 60 * 1000)); 
   daysms = ms % (24 * 60 * 60 * 1000); 
   hours = Math.floor((daysms) / (60 * 60 * 1000)); 
   hoursms = ms % (60 * 60 * 1000); 
   minutes = Math.floor((hoursms) / (60 * 1000)); 
   minutesms = ms % (60 * 1000); 
   sec = Math.floor((minutesms) / (1000)); 
   return days + " hari " + hours + " jam " + minutes + " menit"; 
   // +minutes+":"+sec; 
 }
