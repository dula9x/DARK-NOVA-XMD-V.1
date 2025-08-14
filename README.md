# ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ
🤖 ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ isn’t just a bot — it’s a ⚔️ weaponized WhatsApp engine, fueled by ⚙️ Baileys, powered by ⚡ speed, and loaded with 🧩 features — your next-gen assistant for 👥 group chats, 🎞️ media downloads, 🛡️ moderation, and more.


<h1 align="center" style="font-weight:bold;">
⚡ ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ ⚡
</h1>

<p align="center">
  <img src="https://github.com/dula9x/DARK-NOVA-XMD-V.1/blob/main/images/%E1%B4%85%E1%B4%80%CA%80%E1%B4%8B%20%C9%B4%E1%B4%8F%E1%B4%A0%E1%B4%80%20x%E1%B4%8D%E1%B4%85.png?raw=true" style="border-radius: 50px; box-shadow: 0 0 20px #00ffe5, 0 0 30px #00ffe5, 0 0 40px #00ffe5;">
</p> 

<p align="center">
  <strong>A modern, multi-device WhatsApp bot</strong><br>
  <em>Powered by <a href="https://github.com/WhiskeySockets/Baileys" target="_blank">Baileys</a> — optimized for speed, flexibility, and automation.</em>
</p>


---

## 📍 What is ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=10B981&center=true&vCenter=true&width=600&lines=Multi-device+WhatsApp+bot;Modular+plugin+architecture;Media+and+group+management+tools" alt="Typing SVG" />
</p>

**ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ** is a multi-device WhatsApp bot written in Node.js using the [Baileys](https://github.com/adiwajshing/Baileys) library. It supports QR/Pairing code login, a plugin-based command system, and various media tools such as sticker conversion, song and video downloads, and group management commands.

---

# GET SESSON ID 

https://replit.com/@dulinanethmira6/DARK-NOVA-XMD-V1-WEB-PAIR

GET SESSON ID AND GOTO CONFIG PASTE YOUR SESSON ID AND SAVE

# DEPLOY WHATSAPP BOT IN GITH HUB 

----------------------------------------------------------------------------------------------------------------------------------------------------------------
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm install
    - run: npm run start 
    - run: npm test

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
