const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349154465190";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_53_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpRa2RFcFdGUkFlOU1NUDFsRmY2anNmOWJJTlVha0EzMllGZW94VzNEamc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInE5cGlYem1pUW9DQU8wbTljalFCTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Y3YzAzNWYtNzhkYi00Mjc4LWEwMGUtZTQwNWI3YWUwNTJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMzUsXG4gICAgICA3OCxcbiAgICAgIDk3LFxuICAgICAgMTg0LFxuICAgICAgNDMsXG4gICAgICA3NixcbiAgICAgIDY4LFxuICAgICAgMTUsXG4gICAgICAyMSxcbiAgICAgIDc1LFxuICAgICAgMTcsXG4gICAgICAyNDEsXG4gICAgICAxMDMsXG4gICAgICAzMSxcbiAgICAgIDQxLFxuICAgICAgMjMsXG4gICAgICAyNTEsXG4gICAgICAyMDMsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDY2LFxuICAgICAgMjAsXG4gICAgICA2NixcbiAgICAgIDIyLFxuICAgICAgNTQsXG4gICAgICAxMjAsXG4gICAgICAxMTgsXG4gICAgICAxMTUsXG4gICAgICAxNjEsXG4gICAgICA0OSxcbiAgICAgIDE0OCxcbiAgICAgIDE1NixcbiAgICAgIDcsXG4gICAgICAxMDIsXG4gICAgICAyMTAsXG4gICAgICAxMTQsXG4gICAgICAzNSxcbiAgICAgIDEyMixcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3N0tXV05BWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NDQ2NTE5MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiY29hY2ggbWF2ZVwiLFxuICAgIFwibGlkXCI6IFwiMTkyNzQxNDg5Mjk5NjI4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRwek5vSkVNS1BrcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxL0QzNzZnOVpUYlZyU29VNXgwenY1VFdWZGRMdlVZOFlJT3J1K0lETFVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkR2Z2lFLzBkdndkNkg5ak90TzVQd2tBSWI5QUcwK2dXMCtOeDkxVXZxb2ZJTGlRWjZLbUhtQ0wxNlJxQ1BnVVU0d0FYeFk4TkJYNjBxQkZUdE1GTGp3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVQUGRRdVZ4M3N3SGMwKzRRYzRENjJ4c3hTNm9kMDJMcFJjbFRpd0gyNHNwcFlKVXdyRktLVWhCYUpwWHQ2ZTlJanVyRzZ2QkR3RXpzVW5pNTJUM2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTQ0NjUxOTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY0MTYwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBsMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGwwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWd4ZVhMRTI4L21HanRVb1Q2SHFuOStocFhVcVN1Zjl4U2NMblVzeDNrOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjA1OTIxNDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2NDE2MDk1MzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
