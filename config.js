const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your sesson id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dula9x/DARK-NOVA-XMD-V.1/blob/main/images/%E1%B4%85%E1%B4%80%CA%80%E1%B4%8B%20%C9%B4%E1%B4%8F%E1%B4%A0%E1%B4%80%20x%E1%B4%8D%E1%B4%85.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*I'am Alive Now!! DARK-NOVA-XMD 🤭💗 ආහ් පැටියෝ කොහොමද ?🌝*",
BOT_OWNER: '94752978237/94770349867', 



};
