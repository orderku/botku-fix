const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./botari.js')
nocache('./botari.js', module => console.log(`${module} telah di update!`))

const starts = async (botzari = new WAConnection()) => {
    botzari.logger.level = 'warn'
    botzari.version = [2, 2142, 12]
    
    botzari.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await botzari.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    botzari.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./botari.json') && botzari.loadAuthInfo('./botari.json')
    botzari.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    botzari.on('open', () => {
        success('2', 'Terhubung Bosq')
    })
    await botzari.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./botari.json', JSON.stringify(botzari.base64EncodedAuthInfo(), null, '\t'))

    botzari.on('chat-update', async (message) => {
        require('./botari.js')(botzari, message, _welkom)
    })
botzari.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await botzari.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await botzari.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await botzari.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(botzari.user.jid)) {
        botzari.sendMessage(anu.jid, "Halo!.. saya Ari Bot saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk memulai silahkan ketik .menu", "conversation")
      }
      if (!isWelkom) return
      if (anu.action == "add" && !mem.includes(botzari.user.jid)) {
        mdata = await botzari.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        let v = botzari.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `Hallo @${anu_user} \nSelamat Bergabung di ${mdata.subject}`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://akuari.ga/sc%20bot/dbbot/image/welcome.jpg`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Salam Kenal  Member Baru' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "© ARI BOT", buff, but)
      }
      if (!isWelkom) return
      if (anu.action == "remove" && !mem.includes(botzari.user.jid)) {
        mdata = await botzari.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = botzari.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `Mari Kita Doakan Bersama-Sama Buat Yang Keluar \nSayonara @${anu_user} Semoga Tenang Di Alam Sana`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://akuari.ga/sc%20bot/dbbot/image/keluar.jpg`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Selamat Tinggal huhuhu' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "© ARI BOT", buff, but)
      }
      if (anu.action == "promote") {
        const mdata = await botzari.groupMetadata(anu.jid)
        anu_user = botzari.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await botzari.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        botzari.sendMessage(mdata.id, teks, MessageType.text)
      }







      if (anu.action == "demote") {
        anu_user = botzari.contacts[mem]
        num = anu.participants[0]
        const mdata = await botzari.groupMetadata(anu.jid)
        try {
          ppimg = await botzari.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        botzari.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
