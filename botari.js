owner = '628976388612'
botname = 'ARI BOT'
denarakey = 'Ari'
ownername = 'ARI'
apiset = ''

apilol ='10138f37ef25c4acd09821d5'
zerokey = 'cf986e139a11690077304d29'
apibx = 'BELIAJASONO'
apizen = 'apiakuarii'
apizek = 'apiakuarizeks'
apidapuy = 'apiakuari'

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, sleep, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
                ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
                id,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const path = require('path')
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbbUploader = require("imgbb-uploader");
const os = require('os');
const brainly = require('brainly-scraper');
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const puppeteer = require('puppeteer')
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const _ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _prem = JSON.parse(fs.readFileSync('./database/prem.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
let tebaklucu = JSON.parse(fs.readFileSync('./database/tebaklucu.json'))
let matematika = JSON.parse(fs.readFileSync('./database/matematika.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let tebakkabupaten = JSON.parse(fs.readFileSync('./database/tebakkabupaten.json'))
let tebakkalimat = JSON.parse(fs.readFileSync('./database/tebakkalimat.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let tebakkimia = JSON.parse(fs.readFileSync('./database/tebakkimia.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let tekateki = JSON.parse(fs.readFileSync('./database/tekateki.json'))
let tebaklogika = JSON.parse(fs.readFileSync('./database/tebaklogika.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

antidel = false
let {
    limitCount
} = setting


module.exports = botzari = async (botzari, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = botzari.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6289533301675@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await botzari.chats.all()
		const groupMetadata = isGroup ? await botzari.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? botzari.user.jid : botzari.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? botzari.user.name : conts.notify || conts.vname || conts.name || '-'
        const isBanned = _ban.includes(sender)
		const isPrem = _prem.includes(sender)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		const arg = budy.slice(command.length + 2, budy.length)
		const uaOverride = setting.uaOverride
		const pengirim = sender.id
		const serial = sender.id

		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses',
			success: 'Bot Ari',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error'
			},
			only: {
				admin: 'Kusus Admin',
				group: 'Khusus Group'
			}
		}
		faketeks = 'Ari Bot'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            botzari.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            botzari.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? botzari.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : botzari.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./botzari/logo.jpg')
        const costum = (pesan, tipe, target, target2) => {
			botzari.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            botzari.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await botzari.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            botzari.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }
        (function(_0x2ca6e6,_0x5bc8fb){const _0x4084a5=_0x2ca6e6();function _0x11b8c1(_0x3a5899,_0x3438c6){return _0x14a5(_0x3438c6- -0x3d8,_0x3a5899);}while(!![]){try{const _0xd9301a=parseInt(_0x11b8c1(-0x26a,-0x264))/0x1*(-parseInt(_0x11b8c1(-0x26d,-0x267))/0x2)+parseInt(_0x11b8c1(-0x26f,-0x273))/0x3+-parseInt(_0x11b8c1(-0x26a,-0x271))/0x4*(parseInt(_0x11b8c1(-0x26d,-0x269))/0x5)+-parseInt(_0x11b8c1(-0x266,-0x266))/0x6*(parseInt(_0x11b8c1(-0x260,-0x268))/0x7)+parseInt(_0x11b8c1(-0x267,-0x26a))/0x8*(parseInt(_0x11b8c1(-0x26d,-0x265))/0x9)+-parseInt(_0x11b8c1(-0x270,-0x270))/0xa+parseInt(_0x11b8c1(-0x272,-0x26d))/0xb*(parseInt(_0x11b8c1(-0x268,-0x26e))/0xc);if(_0xd9301a===_0x5bc8fb)break;else _0x4084a5['push'](_0x4084a5['shift']());}catch(_0x1427ff){_0x4084a5['push'](_0x4084a5['shift']());}}}(_0x2e7b,0x24e23));const sendButVideo=async(_0x40f15b,_0x1d9c9b,_0x2f2402,_0x5f4e6e,_0xe76a32,_0xe617ff)=>{jadinya=await botzari[_0x3f0efe(0x31d,0x322)](_0x40f15b,_0x5f4e6e,video),buttonMessagesV={'videoMessage':jadinya[_0x3f0efe(0x324,0x322)]['videoMessage'],'contentText':_0x1d9c9b,'footerText':_0x2f2402,'buttons':_0xe76a32,'headerType':0x5};function _0x3f0efe(_0x496cca,_0x9ed82b){return _0x14a5(_0x496cca-0x1b7,_0x9ed82b);}botzari[_0x3f0efe(0x323,0x328)](_0x40f15b,buttonMessagesV,buttonsMessage,{'quoted':ftrol});},sendList=async(_0x2a1f3e,_0x3748bc,_0x5e04cc,_0x21c17f,_0xf98293)=>{function _0x3f9979(_0x33a1ee,_0x36fa46){return _0x14a5(_0x36fa46- -0x334,_0x33a1ee);}button={'buttonText':_0x3748bc,'description':_0x5e04cc,'sections':_0x21c17f,'listType':0x1},botzari[_0x3f9979(-0x1ce,-0x1c8)](_0x2a1f3e,button,listMessage,{'quoted':ftrol});};function _0x14a5(_0x470700,_0x5890a0){const _0x2e7b89=_0x2e7b();return _0x14a5=function(_0x14a5bf,_0x22c3a7){_0x14a5bf=_0x14a5bf-0x165;let _0x13bca4=_0x2e7b89[_0x14a5bf];return _0x13bca4;},_0x14a5(_0x470700,_0x5890a0);}function hi(){function _0x1c1129(_0x1cb5b2,_0x9ffab5){return _0x14a5(_0x1cb5b2-0xeb,_0x9ffab5);}console[_0x1c1129(0x254,0x24d)]('Hello\x20World!');}hi();function _0x2e7b(){const _0x4fe116=['6yGIOCZ','81EFQHsO','149PewFpN','655608rulnmj','prepareMessage','4768zTJZZK','2519040FHIWiO','log','48IGxVuS','712305jkvXYz','sendMessage','message','121696qYxOdF','40ewhMhO','389417uUBkfV','1964PxTKtP'];_0x2e7b=function(){return _0x4fe116;};return _0x2e7b();}
        //sendButLoc(id/from, "string", "string", image, but, mek)
         function _0x49e8(){const _0x2abf1f=['128458zaqRph','15LuvETp','32FoIOpf','By\x20:\x20Prassz','307917pLgBPR','Zerobot~Prassz','127514DLEruK','2301110zFGGkR','11iUrhyl','5IBSTLg','sendMessage','2099160NwtLDQ','672988HpVyoZ','1059558OLmAKI'];_0x49e8=function(){return _0x2abf1f;};return _0x49e8();}(function(_0x4b5fea,_0xcd96a7){const _0xd54c3c=_0x9a06,_0x555513=_0x4b5fea();while(!![]){try{const _0x4e06eb=parseInt(_0xd54c3c(0x12b))/0x1+parseInt(_0xd54c3c(0x123))/0x2*(parseInt(_0xd54c3c(0x12c))/0x3)+-parseInt(_0xd54c3c(0x129))/0x4*(parseInt(_0xd54c3c(0x126))/0x5)+-parseInt(_0xd54c3c(0x12a))/0x6+-parseInt(_0xd54c3c(0x128))/0x7+parseInt(_0xd54c3c(0x12d))/0x8*(parseInt(_0xd54c3c(0x12f))/0x9)+-parseInt(_0xd54c3c(0x124))/0xa*(-parseInt(_0xd54c3c(0x125))/0xb);if(_0x4e06eb===_0xcd96a7)break;else _0x555513['push'](_0x555513['shift']());}catch(_0x5da84c){_0x555513['push'](_0x555513['shift']());}}}(_0x49e8,0x2960e));function _0x9a06(_0x41e8cb,_0x44ab09){const _0x49e8d9=_0x49e8();return _0x9a06=function(_0x9a063c,_0x40f3e3){_0x9a063c=_0x9a063c-0x123;let _0x55b451=_0x49e8d9[_0x9a063c];return _0x55b451;},_0x9a06(_0x41e8cb,_0x44ab09);}const sendButLoc=async(_0x151338,_0x56cd7c,_0x33ce1f,_0xbff411,_0x1ecc85,_0x40a38d)=>{const _0xf018e3=_0x9a06;return buttonMessagesL={'contentText':_0x56cd7c,'footerText':_0x33ce1f,'buttons':_0x1ecc85,'headerType':0x6,'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0xf018e3(0x130),'address':_0xf018e3(0x12e),'jpegThumbnail':_0xbff411}},botzari[_0xf018e3(0x127)](_0x151338,buttonMessagesL,buttonsMessage,{'quoted':_0x40a38d});};
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "", 
"thumbnail": fs.readFileSync('./botzari/logo.jpg')
}




//━━━━━━━━━━━━━━━[ opsi self/public ]━━━━━━━━━━━━━━━━━//

let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            botzari.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./botzari/logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        botzari.chatRead(from, "read")
        const fakegroup = (teks) => {
            botzari.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./botzari/logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                           
                            status: 1,
                            surface : 1,
                            message: `ARI BOT`, 
                            orderTitle: `ARI BOT`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        botzari.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    botzari.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
botzari.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
botzari.groupRemove(from, [sender])
}     


//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))



 const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      botzari.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: ftrol }
      );
    };






const uptime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};



for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}


//━━━━━━━━━━━━━━━[ SERVER GAME ]━━━━━━━━━━━━━━━━━//
 function isLimit(serial) {
            if (isOwner) { return false; }
            let found = false;
            for (let i of limit) {
                if (i.serial === serial) {
                    let limits = i.limit;
                    if (limits >= limitCount) {
                        found = true;
                        reply(`Perintah BOT anda sudah mencapai batas, coba esok hari :)`)
                        return true;
                    } else {
                        limit
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false) {
                let obj = { serial: `${serial}`, limit: 1 };
                limit.push(obj);
                fs.writeFileSync('./database/limit.json', JSON.stringify(limit));
                return false;
            }
        }
        function limitAdd(serial) {
            if (isOwner) { return; }
            var found = false;
            Object.keys(limit).forEach((i) => {
                if (limit[i].serial == serial) {
                    found = i
                }
            })
            if (found !== false) {
                limit[found].limit += 1;
                fs.writeFileSync('./database/limit.json', JSON.stringify(limit));
            }
        }




















antidel = true
botzari.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
botzari.sendMessage(m.key.remoteJid, `━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━
    *Nama  : @${m.participant.split("@")[0]}*
    *Jam  : ${jam} ${week} ${calender}*
    *Type  : ${type}*
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
botzari.copyNForward(m.key.remoteJid, m.message)
})

if (tebaklucu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklucu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Lucu  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaklucu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklucu.json", JSON.stringify(tebaklucu))
                }
            }


if (matematika.hasOwnProperty(sender.split('@')[1]) && !isCmd) {
                kuis = true
                jawaban = matematika[sender.split('@')[0]]
                if (jawaban) {
                    await reply(`*_🎮 Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* \n\nIngin bermain lagi? kirim *${prefix}matematika*`)
                    delete matematika[sender.split('@')[0]]
                    fs.writeFileSync("./database/matematika.json", JSON.stringify(matematika))
                }
            }

 if (caklontong.hasOwnProperty(sender.split('@')[1]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* \n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }

if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 SUSUN KATA  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }



  if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }

if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
			
if (siapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = siapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Siapa Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete siapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
                }
            }	


if (tebaklogika.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklogika[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Logika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaklogika[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
                }
            }	


			
			if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
			
			if (tebakkabupaten.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkabupaten[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Kabupaten  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkabupaten[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakkabupaten))
                }
            }
			
			if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Kalimat 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkalimat[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                }
            }
			
			if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                }
            }
			
			if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak kimia  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
                }
            }
			
			if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
			
			if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Tebakan  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
                }
            }
			
			if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Teka Teki  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tekateki[sender.split('@')[0]]
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                }
            }
			
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//


switch (command) {
	case 'menu':
	case 'help':
teks = `Hai ${pushname} 👋
Saya ${botname} Whatsapp yang membantu mempermudahkan sesuatu seperti membuat stiker dan lainnya, butuh info dariku ?`
img = fs.readFileSync('./botzari/logo.jpg')
trans = `Note : kalau kamu wa lama atau mod, dan button ga keliatan, langsung aja ketik .allmenu`
but = [
      { buttonId: `${prefix}allmenu`, buttonText: { displayText: '♚ MENU' }, type: 1 },
 { buttonId: `${prefix}hiddenmenu`, buttonText: { displayText: 'Hidden Menu' }, type: 1 },
     { buttonId: `${prefix}owner`, buttonText: { displayText: '❁ OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but)
break
	case 'allmenu':
				menunya = `✮Group Menu✮
	✎ ${prefix}antilink
	✎ ${prefix}welcome
	✎ ${prefix}antivirtex
	✎ ${prefix}group
	✎ ${prefix}linkgrup
	✎ ${prefix}promote
	✎ ${prefix}demote
	✎ ${prefix}add (MT BIKIN KEBANNED)
	✎ ${prefix}kick
	✎ ${prefix}setpp
	✎ ${prefix}setdesc [desc grub yang baru]
	✎ ${prefix}setname [nama grub yang baru]
	✎ ${prefix}hidetag
	✎ ${prefix}join [link grup tanpa https://]	


	✮Sticker Menu✮
	✎ ${prefix}attp
	✎ ${prefix}attp1
        ✎ ${prefix}ttp
	✎ ${prefix}sticker
	✎ ${prefix}tomp3
	✎ ${prefix}tovideo
	✎ ${prefix}toimg
	
	
	✮Downloader Menu✮
	✎ ${prefix}ytplay
	✎ ${prefix}ytsearch
	✎ ${prefix}ytmp3
	✎ ${prefix}ytmp4
	✎ ${prefix}tiktok
	✎ ${prefix}pinterest
	✎ ${prefix}ig
	✎ ${prefix}joox
	✎ ${prefix}cocofun	

	✮Islami Menu✮
	✎ ${prefix}alquran
	✎ ${prefix}asmaulhusna
	✎ ${prefix}alquranaudio
	✎ ${prefix}jadwalsholat
	✎ ${prefix}kisahnabi
	✎ ${prefix}listsurah
	✎ ${prefix}randomdoa
	✎ ${prefix}doa
	✎ ${prefix}tahlil
	✎ ${prefix}ayatkursi

	
	✮Information Menu✮
	✎ ${prefix}kbbi
	✎ ${prefix}infogempa
	✎ ${prefix}jadwaltv
	✎ ${prefix}translate
	✎ ${prefix}cuaca
	✎ ${prefix}wikipedia
	✎ ${prefix}lirik

	
	✮Random Text Menu✮
	✎ ${prefix}quotes
	✎ ${prefix}quotesanime
	✎ ${prefix}quotesdilan
	✎ ${prefix}quotesimage
	✎ ${prefix}katabijak
	✎ ${prefix}randomnama
	✎ ${prefix}faktaunik
	✎ ${prefix}pantun
	✎ ${prefix}puisi
	✎ ${prefix}quoteislami
	✎ ${prefix}quotesbucin
	✎ ${prefix}katasenja
	✎ ${prefix}pantunpakboy
	✎ ${prefix}bikinquotes
	✎ ${prefix}gombalpakboy
	✎ ${prefix}quoteslucu
	✎ ${prefix}ceritahoror


	SIM SIMI CHAT BOT  

	✎ ${prefix}simi

	VIEWRS FREE
	Layanan ini untuk menamnah views sosisal media anda
	Tersedia untuk instagram dan tiktok

	TIKOK
	${prefix}tiktokviews 

	INSTAGRAM
	${prefix}igviews


	✮Game Menu✮
	✎ ${prefix}caklontong
	✎ ${prefix}tebakgambar
	✎ ${prefix}asahotak
	✎ ${prefix}siapaaku
	✎ ${prefix}tebaklogika
	✎ ${prefix}susunkata
	✎ ${prefix}tebakbendera
	✎ ${prefix}tebakkabupaten
	✎ ${prefix}tebakkalimat
	✎ ${prefix}tebakkata
	✎ ${prefix}tebakkimia
	✎ ${prefix}tebaklirik
	✎ ${prefix}tebaktebakan
	✎ ${prefix}tekateki
        ✎ ${prefix}tebaklucu
	
	
	✮Search Menu✮
	✎ ${prefix}wallpapersearch
	✎ ${prefix}playstore
	✎ ${prefix}shopee
	✎ ${prefix}google
	✎ ${prefix}lirik
	✎ ${prefix}apkmod
	
	
	✮Primbon Menu✮
	✎ ${prefix}haribaik
	✎ ${prefix}artinama
	✎ ${prefix}jodoh
	✎ ${prefix}jadian
	✎ ${prefix}harilarangan
	✎ ${prefix}artimimpi
	
	✮Cek Fun Menu✮

	✎ ${prefix}hobi
	✎ ${prefix}ganteng
	✎ ${prefix}cantik
	✎ ${prefix}apakah
	✎ ${prefix}kapankah
	✎ ${prefix}bisakah
	✎ ${prefix}sifat
	✎ ${prefix}asal
	✎ ${prefix}beban
	✎ ${prefix}cekjadian
	
	
	✮Stalk Menu✮
	✎ ${prefix}stalkig
	✎ ${prefix}stalkgithub
	✎ ${prefix}stalktiktok
	
	✮Random Image Fun Menu✮
	✎ ${prefix}memeindo
	✎ ${prefix}memeindo1
	✎ ${prefix}darkjokes
	✎ ${prefix}darkjokes1
	✎ ${prefix}darkjokes2
	✎ ${prefix}jokesreceh
	
	✮Creator Image Menu✮
	✎ ${prefix}naruto
	✎ ${prefix}harrypoter
	✎ ${prefix}neon
	✎ ${prefix}chrome
	✎ ${prefix}smoke
	✎ ${prefix}love
	✎ ${prefix}blackpink
	✎ ${prefix}joker
	✎ ${prefix}transformer
    	✎ ${prefix}hartatahta
	✎ ${prefix}hartatahtacustom
	✎ ${prefix}ppcouple
    	✎ ${prefix}nulisdepan
    	✎ ${prefix}nuliskiri
    	✎ ${prefix}nuliskanan
    	✎ ${prefix}foliokiri
    	✎ ${prefix}foliokanan	
    	✎ ${prefix}yasin
    	✎ ${prefix}imagetourl
    	✎ ${prefix}removebg
    	✎ ${prefix}bear
    	✎ ${prefix}gravity
    	✎ ${prefix}water
    	✎ ${prefix}butterfly
    	✎ ${prefix}shaddow
    	✎ ${prefix}lol
    	✎ ${prefix}grass
   	✎ ${prefix}qrcode
    	✎ ${prefix}cslogo
    	✎ ${prefix}epep
    	✎ ${prefix}kembangapi
    	✎ ${prefix}ssweb
    	✎ ${prefix}glitch
    	✎ ${prefix}rec
    	✎ ${prefix}crf
    	✎ ${prefix}wolf
    	✎ ${prefix}battlefield
    	✎ ${prefix}tolol
        ✎ ${prefix}gitiktok
        ✎ ${prefix}metallic
        ✎ ${prefix}kayu
        ✎ ${prefix}horror
        ✎ ${prefix}permen
        ✎ ${prefix}silk
        ✎ ${prefix}batik
        ✎ ${prefix}nature3d
        ✎ ${prefix}summer3d
        ✎ ${prefix}fall
        ✎ ${prefix}neonlights
        ✎ ${prefix}8bit
        ✎ ${prefix}halloween


      Other Menu
	✎ ${prefix}texttovoice
	✎ ${prefix}delchat

	( PREMIUM USER YANG BISA TAMBAH USER )
	✎ ${prefix}addprem 620895333016753 / kode negara nomor hp


	✮Owner Menu✮
	✎ ${prefix}owner
	✎ ${prefix}bc
	✎ ${prefix}ban reply / +6294794456
	✎ ${prefix}unban reply / +6294794456
	✎ ${prefix}jamsekarang

     CEK STATUS BOT
    ✎ ${prefix}ping
    ✎ ${prefix}cekpremium


	Note : Fitur Masih Dikit Karena Baru Jadi
	Next Update Bakal Di Tambahin bisa req fitur ke wa.me/${owner}
	
`
	botzari.sendMessage(from, menunya, text, {quoted: ftrol})
                  break
				  
				  case 'hiddenmenu':
				  if (!isPrem) return reply(`Tidak bisa akses kamu bukan user premium \n silahkan kontak owner untuk mendapatkan premium free kok`)
				  menunya = `✮HIDDEN MENU✮
	
	

	✎ ${prefix}character
	✎ ${prefix}manga
	✎ ${prefix}anime
	✎ ${prefix}kusonimesearch
	✎ ${prefix}otakudesusearch
	✎ ${prefix}nhentaisearch
	✎ ${prefix}nekopoisearch
	✎ ${prefix}gimage
	✎ ${prefix}62
	✎ ${prefix}santuy
	✎ ${prefix}bocil
	✎ ${prefix}ukhty
	✎ ${prefix}cecan
	✎ ${prefix}hijab
	✎ ${prefix}geayubi
	✎ ${prefix}ass
	✎ ${prefix}ahegao
	✎ ${prefix}bdsm
	✎ ${prefix}blowjob
	✎ ${prefix}cuckold
	✎ ${prefix}cum
	✎ ${prefix}ero
	✎ ${prefix}femdom
	✎ ${prefix}foot
	✎ ${prefix}gangbang
	✎ ${prefix}glasses
	✎ ${prefix}hentai
	✎ ${prefix}hentaigif
	✎ ${prefix}jahy
	✎ ${prefix}masturbation
	✎ ${prefix}nsfwNeko
	✎ ${prefix}orgy
	✎ ${prefix}panties
	✎ ${prefix}thighs
	✎ ${prefix}yuri
	✎ ${prefix}pussy	
	✎ ${prefix}waifu
	✎ ${prefix}neko
	✎ ${prefix}shinobu
	✎ ${prefix}megumin
	✎ ${prefix}bully
	✎ ${prefix}cuddle
	✎ ${prefix}cry
	✎ ${prefix}kiss
	✎ ${prefix}hug
	✎ ${prefix}awoo
	✎ ${prefix}lick	
	✎ ${prefix}xnxxsearch
	✎ ${prefix}xnxx
	✎ ${prefix}randomcersex
	✎ ${prefix}sange
	✎ ${prefix}lesbi
	✎ ${prefix}homo
	✎ ${prefix}cekmati
	✎ ${prefix}cekjadian
	✎ ${prefix}tiktokporn
	✎ ${prefix}cekngewe
	✎ ${prefix}rika
	✎ ${prefix}hentaividio
	✎ ${prefix}randombokep

	
	Note : Fitur Masih Dikit Karena Baru Jadi
	Next Update Bakal Di Tambahin bisa req fitur ke wa.me/${owner}
	
	Untuk bisa akses fitur hidden menu bisa req ke owner bot ${owner} untuk bisa akses Trims
` 
botzari.sendMessage(from, menunya, text, {quoted: ftrol})
                  break	  
				  
				  
				  
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//








case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
botzari.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
botzari.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await botzari.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
botzari.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
botzari.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
botzari.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
botzari.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
botzari.groupDemoteAdmin(from, mentioned)
}
break


case 'mute':
                if (!isOwner) return reply('KHUSUS OWNER')
                botzari.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!isOwner) return reply('KHUSUS OWNER')
                botzari.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break



















 case 'add2':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             botzari.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             botzari.groupAdd(from, [entah])
}
       
             break











case 'addd' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
botzari.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}

break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
botzari.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
botzari.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
botzari.groupUpdateSubject(from, `${body.slice(9)}`)
botzari.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
botzari.groupUpdateDescription(from, `${body.slice(9)}`)
botzari.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await botzari.downloadAndSaveMediaMessage(mek, './database/media_user')
await botzari.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await botzari.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
botzari.sendMessage(from, options, text)
break


//━━━━━━━━━━━━━━━[ FITUR Image Creator ]━━━━━━━━━━━━━━━━━//


case 'ssweb':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`link web nya mana yang mau di ss\nContoh: ${prefix + command} https://akuari.ga`)
query = args[0]
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/other/ssweb?link=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: ftrol })
break





case 'bear':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/textpro/black-and-white-bear?text=${query}&apikey=${apibx}`)
ini_buffer = await getBuffer(get_audio.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'gravity':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api//textpro/gravity1?text=${query}&apikey=${apibx}`)
ini_buffer = await getBuffer(get_audio.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'water':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'qrcode':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'cslogo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'epep':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/epep?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'kembangapi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/tfire?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break


case 'naruto':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/naruto?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'butterfly':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/butterfly?text=${query}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'love':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/lovetext?text=${query}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'shaddow':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/shadow?text=${query}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'lol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/retrolol?text=${query}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'grass':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/grassmsg?text=${query}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break




case 'joker':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/jokerlogo?text=${ini_link}`)
get_audio = await getBuffer(get_audio.result)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break


case 'harrypoter':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/harrypotter?text=${ini_link}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'blackpink':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/ephoto/blackpink?text=${ini_link}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'transformer':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/textpro/transformer?text=${ini_link}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case '8bit':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama|sinta\n\nminimal 3 huruf atau angka!`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/a8bit?text=${text1}&text_2=${text2}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'gitiktok':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama|sinta\n\nminimal 3 huruf atau angka!`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/tik_tok?text=${text1}&text_2=${text2}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'me2tallic':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama|sinta`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/tik_tok?text=${text1}&text_2=${text2}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'metallic':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/metallic?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break




 case 'tesaku': 
{
        const argy = body.trim(' ').split("|")
        const namaph1 = argy[1]
        const namaph2 = argy[2]
try {
 (async () => {
  const browser = await puppeteer.launch({
headless: false,
args: ["--no-sandbox", "--disabled-setupid-sandbox"], 
 });
  const page = await browser.newPage();
  await page
   .goto("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", {
    waitUntil: "networkidle2"
   })
   .then(async () => {
    await page.type("#text-0", namaph1); //BUAT NAMA KE 1
    await page.type("#text-1", namaph2); //BUAT NAMA KE 2
    await page.click("#submit");
    await new Promise(resolve => setTimeout(resolve, 3000));
    const element = await page.$(
     'div[class="btn-group"] > a'
     );
    const text = await (await element.getProperty("href")).jsonValue();
    const urlmp4 = ({
     url: text
    })
    botzari.sendFileFromUrl(from, text, id)
    browser.close();

   })
.catch((err => {
				console.log(err)
				client.reply(from, 'error', id)
			}))
	})();
} catch (error) {
	console.log('error bang')
	client.reply(from, 'error', id)
}
}


break
case 'halloween':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
cek = await fetchJson(`https://api.zeks.me/api/ephoto-scraper?apikey=apivinz&data={"url":"https://ephoto360.com/halloween/tao-hieu-ung-chu-halloween-online-79.html","text":%20["${ini_link}"]}`)
get_audio = await getBuffer(cek)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'kayu':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/kayu?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'horror':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/horror?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'permen':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/permen?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'silk':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/silk?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'batik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/batik?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'nature3d':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/nature3d?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'summer3d':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/summer3d?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'fall':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/fall?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'neonlights':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama\n\nminimal 3 huruf atau angka!`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://apiakuari1.herokuapp.com/photooxy/neonlights?text=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break



case 'glitch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama|sinta\n\nminimal 3 huruf atau angka!`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://zenzapi.xyz/api/textpro/glitch?text=${text1}&text2=${text2}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'tolol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${apilol}&name=${ini_link}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'crf':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/ephoto/crossfire?text=${ini_link}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'wolf':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Penggunaan ${prefix + command} ari|ganteng`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://zenzapi.xyz/api/textpro/logowolf2?text=${text1}&text2=${text2}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quote: mek })
break
case 'battlefield':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Penggunaan ${prefix + command} ari|ganteng`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/battlefield?text=${text1}&text2=${text2}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break
case 'pubg':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Penggunaan ${prefix + command} ari|ganteng`)
makell = args.join(" ")
text1 = makell.split("|")[0];
text2 = makell.split("|")[1];
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/pubg?text=${text1}&text2=${text2}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break


case 'rec':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/textpro/impressiveglitch?text=${ini_link}&apikey=${apizen}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'neon':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/textpro/neon-light?text=${ini_link}&apikey=${apibx}`)
get_audioo = await getBuffer(get_audio.result)
await botzari.sendMessage(from, get_audioo, image, { quoted: mek })
break

case 'chrome':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${ini_link}&apikey=${apibx}`)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break

case 'smoke':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/smoke?text=${ini_link}&apikey=${apizen}`)
ini_buffer = await getBuffer(get_audio)
await botzari.sendMessage(from, get_audio, image, { quoted: mek })
break


//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
botzari.sendMessage(from, buffer, sticker, { quoted: mek })
break

case 'attp2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
query = args.join(" ")
result = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${query}`)
buffer = await getBuffer(result.image)
botzari.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
query = args.join(" ")
buffer = await getBuffer(`https://apiakuari1.herokuapp.com/other/ttp?text=${query}`)
botzari.sendMessage(from, buffer, image, { quoted: mek })
break







case 'sticker':
case 'stiker':
case 's':
case 'setiker':

 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await botzari.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                botzari.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await botzari.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            botzari.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    



case 'toimg':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await botzari.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Ari Bot`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
botzari.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya ')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await botzari.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
botzari.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await botzari.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
botzari.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Ari Bot' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//


case 'ayatkursi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_audio = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/ayatkursi.json`)
get = (get_audio.result)
cap = (`Ayat: ${get.arabic} \nLatin: ${get.latin} \nArti: ${get.translation} \n Tafsir: ${get.tafsir}`)
reply(cap)
break

case 'tahlil':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/tahlil.json`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Urutan ${x.id} : ${x.title}\n`
ini_txt += `Arab : ${x.arabic}\n\n`
}
reply(ini_txt)
break




case 'listsurah':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/listsurah.json`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
iki = (`untuk cari surah pilih beberapa server berikut ini contoh penggunaan  ${prefix + command}1 nomor \n\n${prefix + command}1 1 \n${prefix + command}2 1 \n\n List nomor surah bisa ketik ${prefix}listsurah`)
reply(iki)
break

case 'alquran1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18  untuk list id surah ketik ${prefix}listsurah`)
urls = `https://equran.id/api/surat/${args[0]}`
quran = await fetchJson(urls)
ayat = quran.ayat
but = [
{ buttonId: `${prefix + command} ${quran.surat_selanjutnya.nomor}`, buttonText: { displayText: 'NEXT' }, type: 1 }
]
ini_txt = `QS. ${quran.nama_latin} : 1-${quran.jumlah_ayat}\nArti Surah :${quran.arti}\nTurun Surah :${quran.tempat_turun}\n\n`
for (var x of ayat) {
arab = x.ar
nomor = x.nomor
latin = x.tr
indo = x.idn
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
const btnasu = {
    contentText: `${ini_txt}`,
    buttons: but,
    headerType: 1
}
await botzari.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'doa':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau cari doa apa\nContoh: ${prefix + command} sebelum makan`)
query = args.join(" ")
anu = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${query}`)
los = `Doa : ${anu.doa}\nAyat : ${anu.ayat}\nLatin : ${anu.latin}\nArti : ${anu.artinya}\n`
reply(los)
break


case 'randomdoa':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random`)
los = `Doa : ${get_result.doa}\nAyat : ${get_result.ayat}\nLatin : ${get_result.latin}\nArti : ${get_result.artinya}`
reply(los)
break




case 'alquran2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18  untuk list id surah ketik ${prefix}listsurah`)
urls = `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${args[0]}.json`
quran = await fetchJson(urls)
ayat = quran.verses
ini_txt = `QS. ${quran.name} : 1-${quran.number_of_ayah}\n\n`
for (var x of ayat) {
arab = x.text
nomor = x.number
latin = x.translation_en
indo = x.translation_id
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break



case 'alquranaudio':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
surah = args[0]
get_result = await fetchJson(`https://equran.id/api/surat/${surah}`)
sab = `Sabar Sedang Proses...\n\n engga dikirim audionya sama bot ? klik ini untuk download : ${get_result.audio}`
reply(sab)
ini_buffer = await getBuffer(get_result.audio)
await botzari.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/asmaulhusna`)
get_result = get_result.result
ini_txt = `Nama: ${get_result.nama}\n`
ini_txt += `Arab : ${get_result.arab}\n`
ini_txt += `Indonesia : ${get_result.text_id}\n`
ini_txt += `English : ${get_result.text_en}`
reply(ini_txt)
break
case 'kisahnabi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.dapuhy.ga/api/islam/kisahnabi?nabi=${query}&apikey=${apidapuy}`)
get_result = get_result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.kelahiran}\n`
ini_txt += `Wafat Usia : ${get_result.wafat_usia}\n`
ini_txt += `Tempat : ${get_result.singgah}\n`
ini_txt += `Story : \n${get_result.kisah}`
reply(ini_txt)
break
case 'jadwalsholat':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/jadwalsholat?apikey=${apizek}&daerah=${daerah}`)
get_result = get_result.data.string
ini_txt = `Wilayah : ${daerah}\n`
ini_txt += `${get_result}\n`
reply(ini_txt)
break


//━━━━━━━━━━━━━━━[ FITUR SPEED ]━━━━━━━━━━━━━━━━━//


  case "speed":
      case "ping":
	   case "cek":
 case "runtime":
 case "test":
          case "run":
const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `${ssd}Speed: ${latensi.toFixed(4)} Second \n\nBot Aktif Selama : ${uptime(os.uptime())}`;
          fakegroup(pingnya);
        });
        break
		
		case 'jamsekarang':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break

//━━━━━━━━━━━━━━━[ FITUR FUN ]━━━━━━━━━━━━━━━━━//

 case 'upload':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
 if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  botzari.downloadAndSaveMediaMessage(encmedia)
               get_result = await fetchJson(`https://api.dapuhy.ga/api/others/anonfiles?url=${media}&apikey=${apidapuy}`)
			   cap = (`Berhasil di upload\nLink: ${get_result.url.short}`)
                reply(cap)
              .catch(err => {
               throw err
})
}
else {
               reply(`kirim/reply gambar / vidio dengan perintah ${prefix + command}`)
}
               break



  case 'imagetourl':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
 var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  botzari.downloadAndSaveMediaMessage(encmedia)       
               imgbb('473e3a0c9b1b7f078f4f1b48ce6f355e', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               botzari.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
  
}
else {
               reply(`kirim/reply gambar dengan perintah ${prefix + command}`)
}

break

  case 'triggered':
 if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
 var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  botzari.downloadAndSaveMediaMessage(encmedia)       
               data = await imgbb('473e3a0c9b1b7f078f4f1b48ce6f355e', media)
               get_result = await getBuffer(`https://api.dapuhy.ga/api/canvas/triggered?img=${data.display_url}&apikey=${apidapuy}`)
                      await botzari.sendMessage(from, get_result, video, { mimetype: Mimetype.gif, quoted: mek })              
              .catch(err => {
               throw err
})
}
else {
               reply(`kirim/reply gambar dengan perintah ${prefix + command}`)
}
               break

  case 'removebg':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
 if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
 var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  botzari.downloadAndSaveMediaMessage(encmedia)       
               data = await imgbb('473e3a0c9b1b7f078f4f1b48ce6f355e', media)
               get_result = await getBuffer(`https://apiakuari1.herokuapp.com/other/removebg?link=${data.display_url}`)
                await botzari.sendMessage(from, get_result, image, { quoted: mek })
              .catch(err => {
               throw err
})
}
else {
               reply(`kirim/reply gambar dengan perintah ${prefix + command}`)
}
               break
			   








case 'cekjadian':
       if (!isGroup)return reply(mess.only.group)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'cekngewe':
       if (!isGroup)return reply(mess.only.group)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang habis ngewe  @${akuu.jid.split('@')[0]}  Sama @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'beban':
       if (!isGroup)return reply(mess.only.group)
              membr = []
              const ngeb = groupMembers
              const todb = groupMembers
              const bebb = ngeb[Math.floor(Math.random() * ngeb.length)]
              const anb = pushname[Math.floor(Math.random() * todb.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${bebb.jid.split('@')[0]}`
              membr.push(bebb.jid)
              mentions(teks, membr, true)
              break


       case 'cekmati':
              if (!q) return reply(`harus nama panggillan tidak boleh 2 kata harus 1 kata.\n\n contoh .cekmati bagas`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break


 case "hobi":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`hobi Nya Siapa \nContoh: ${prefix + command} ari`)
					ini_link = args.join(" ")
					const hob = ['Suka Santuy','Bucin','Main Pb  xban','Suka C0li','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
				    await botzari.sendMessage(from, 'Hobi si : *'+ini_link+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break


  case "ganteng":
					// ā ļø¸ Case by DappaUhuy&YogPw

                     if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Ganteng Nya Siapa \nContoh: ${prefix + command} ari`)
					ini_link = args.join(" ")
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					await botzari.sendMessage(from, 'Cek Ganteng nya si : *'+ini_link+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					
					break

case "cantik":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Cantik Nya Siapa \nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					await botzari.sendMessage(from, 'Cek Cantik nya si : *'+ini_link+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					
					break
					
			case "sange":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sange Nya Siapa \nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const san =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nges = san[Math.floor(Math.random() * san.length)]
					await botzari.sendMessage(from, 'Cek Sange nya si : *'+ini_link+'*\n\nJawaban : '+ nges+'% Panik Gak ?', text, { quoted: mek })
					
					break
					
	case "lesbi":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`lesbi Nya Siapa \nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const les =['Banget','Super','B aja','Engga','Gamungkin','Emang','Baru tau kalao di lesbi?','eh ketahuan wkwkwkw','ehh kok ga bisa ? \n Emang dia manusia ? wkwkwkwk','Panik yaa ?']
					const bi = les[Math.floor(Math.random() * les.length)]
					await botzari.sendMessage(from, 'Cek Lesbi nya si : *'+ini_link+'*\n\nJawaban : '+ bi+'', text, { quoted: ftrol })
					
					break
case "homo":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Homo Nya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ho =['Banget','Super','B aja','Engga','Gamungkin','Emang','Baru tau kalao di homo?','eh ketahuan wkwkwkw','ehh kok ga bisa ? \n Emang dia manusia ? wkwkwkwk','Panik yaa ?']
					const mo = ho[Math.floor(Math.random() * ho.length)]
					await botzari.sendMessage(from, 'Cek Homo nya si : *'+ini_link+'*\n\nJawaban : '+ mo+'', text, { quoted: ftrol })
					
					break
					
		case "apakah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ap =['Emang kita kenal kok tanya-tanya','Ya gatau kok tanya bot :v','Ah lu bau sih','Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = ap[Math.floor(Math.random() * ap.length)]
					await botzari.sendMessage(from, 'Pertanyaan : apakah *'+ini_link+'*\n\nJawaban : '+ kah+'', text, { quoted: ftrol })
					
					break
		case "kapankah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ka =['emang kita kenal ?','lihat aja nanti','15 menit','5 menit','1 Jam','Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const pan = ka[Math.floor(Math.random() * ka.length)]
					await botzari.sendMessage(from, 'Pertanyaan : kapankah *'+ini_link+'*\n\nJawaban : '+ pan+'', text, { quoted: ftrol })
					
					break			
					
		case "bisakah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const bis =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const sak = bis[Math.floor(Math.random() * bis.length)]
					await botzari.sendMessage(from, 'Pertanyaan : bisakah *'+ini_link+'*\n\nJawaban : '+ sak+'', text, { quoted: ftrol })
					
					break				
				
					
	case "sifat":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sifat Nya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const sif =['Panutan','Pelit','Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const fat = sif[Math.floor(Math.random() * sif.length)]
					await botzari.sendMessage(from, 'Cek Sifat nya si : *'+ini_link+'*\n\nJawaban : '+ fat+'', text, { quoted: ftrol })
					
					break
					
		case "asal":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sifat Nya Siapa \nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const siap =['rumah','bawah jembatan','hutan','lampu merah','pinggir sungai','tempat sampah','kawasan mewah','pijat ++','room karaoke','panti asuhan','rawa rawa','pinggir jalan','rumah', 'ya ndak tau kok tanya saya','kepoo']
					const apa = siap[Math.floor(Math.random() * siap.length)]
					await botzari.sendMessage(from, 'Pertanyaan : *asal '+ini_link+'*\n\nJawaban : '+ apa+'', text, { quoted: ftrol })
					
					break
					
					
						
//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//
//api cak lontong https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta//



case "caklontong1":
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
	
   anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json`)
const cakk = anu[Math.floor(Math.random() * anu.length)]
   cak = `*${cakk.soal}*${cakk.jawaban}`
   setTimeout( () => {
   reply('*Jawaban :* '+cakk.jawaban+'\n\n*Alasan :* '+cakk.deskripsi+'', text, {quoted: ftrol}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   botzari.sendMessage(from, cak, text, {quoted: ftrol }) // ur cods
   }, 0) // 1000 = 1s,
   
== 0


 case 'caklontong':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/caklontong.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabancak = get_result.jawaban
			  alasancak = get_result.deskripsi
              kisi_kisicak = jawabancak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaancak = get_result.soal
              botzari.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaancak+'\n• *kisi²* :'+kisi_kisicak, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawabancak.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(50000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabancak))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabancak + "\nAlasan: " + alasancak)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}

              break


case 'asahotak':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/asahotak.json`)
             get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabanasah = get_result.jawaban
              kisi_kisiasah = jawabanasah.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaanasah = get_result.soal
              botzari.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaanasah+'\n• *kisi²* :'+kisi_kisiasah, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawabanasah.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(50000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabanasah))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabanasah)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}

              break



              case 'tebakkata':
                          if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkata.json`)
             get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabanasah = get_result.jawaban
              kisi_kisiasah = jawabanasah.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaanasah = get_result.soal
              botzari.sendMessage(from, '*+* ```Tebak Kata```\n\n• *soal* :'+pertanyaanasah+'\n• *kisi²* :'+kisi_kisiasah, text, { quoted: mek}).then(() => {

              tebakkata[sender.split('@')[0]] = jawabanasah.toLowerCase()
              fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
})
              await sleep(50000)
              if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabanasah))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabanasah)
              delete tebakkata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
}

              break





 







			  case 'siapaaku':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (siapaaku.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/siapaaku.json`)
               get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansiapa = get_result.jawaban
              kisi_kisisiapa = jawabansiapa.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansiapa = get_result.soal
              botzari.sendMessage(from, '*+* ```Siapa Aku?```\n\n• *soal* :'+pertanyaansiapa+'\n• *kisi²* :'+kisi_kisisiapa, text, { quoted: mek}).then(() => {
              siapaaku[sender.split('@')[0]] = jawabansiapa.toLowerCase()
              fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
})
              await sleep(50000)
              if (siapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansiapa))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansiapa)
              delete siapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
}

              break
			  

 case 'tebakgambar':
              if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply(`Selesein yg sebelumnya dulu `)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakgambar.json`)
			  get_result = get_result[Math.floor(Math.random() * get_result.length)]
              ini_imagetebak = get_result.img
              jawabantebak = get_result.jawaban
			  deskrip = get_result.deskripsi
              kisi_kisitebak = jawabantebak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_imagetebak)
              botzari.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisitebak+'\nWaktu : 40detik' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawabantebak.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(40000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabantebak))
              reply("*WAKTU HABIS. KELAMAAN LU\n\nJawaban*: " + jawabantebak + "\nDeskripsi: " + deskrip)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}

              break




case 'tebaklogika':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaklogika.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://api.zeks.me/api/siapa-aku?apikey=${apizek}`)
              get_result = get_result.data
              jawabansiapat = get_result.jawaban
              kisi_kisisiapat = jawabansiapat.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansiapat = get_result.soal
              botzari.sendMessage(from, '*+* ```TEBAK LOGIKA```\n\n• *soal* :'+pertanyaansiapat+'\n• *kisi²* :'+kisi_kisisiapat, text, { quoted: mek}).then(() => {
              tebaklogika[sender.split('@')[0]] = jawabansiapat.toLowerCase()
              fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
})
              await sleep(50000)
              if (tebaklogika.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansiapat))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansiapat)
              delete tebaklogika[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
}

              break
			  
			  
			  case 'susunkata':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/susunkata.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
			  tipe = get_result.tipe
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```SUSUN KATA```\n\n• *soal* :'+pertanyaansust+'\n• *Katagori²* :'+tipe+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(50000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}




              break


case 'tebaklucu':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaklucu.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakjenaka`)
                         jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.pertanyaan
              botzari.sendMessage(from, '*+* ```Tebak Lucu```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebaklucu[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebaklucu.json", JSON.stringify(tebaklucu))
})
              await sleep(50000)
              if (tebaklucu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebaklucu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklucu.json", JSON.stringify(tebaklucu))
}
              break


 case 'matematika':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (matematika.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/math`)
            
              jawabancak = get_result.jawaban 
			  
              kisi_kisicak = jawabancak.replace(/[1|2|3|4|5|6|7|8|9|0|-]/gi, '_')
              pertanyaancak = await getBuffer(get_result.soal)  
 botzari.sendMessage(from, pertanyaancak, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nKisi-Kisi :'+kisi_kisicak+'\nWaktu : 60detik'+jawabancak+'' }).then(() => {
              matematika[sender.split('@')[0]] = jawabancak.toLowerCase()
              fs.writeFileSync("./database/matematika.json", JSON.stringify(matematika))
})
              await sleep(60000)
              if (matematika.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabancak))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabancak)
              delete matematika[sender.split('@')[0]]
              fs.writeFileSync("./database/matematika.json", JSON.stringify(matematika))
}

              break


case 'tebakbendera':
              if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply(`Selesein yg sebelumnya dulu `)
              get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakbendera`)
              ini_imagetebak = get_result.bendera
              jawabantebak = get_result.nama
              kisi_kisitebak = jawabantebak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')     
             botzari.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *soal* :'+ini_imagetebak+'\n• *kisi²* :'+kisi_kisitebak, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawabantebak.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(40000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabantebak))
              reply("*WAKTU HABIS. KELAMAAN LU\n\nJawaban*: " + jawabantebak)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}

              break




 case 'tebakkalimat':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkalimat.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```TEBAK KALIMAT```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkalimat[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
})
              await sleep(50000)
              if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkalimat[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
}




              break
			  
			  
			 case 'tebakkabupaten':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkabupaten.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkabupaten.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
			  tipe = get_result.tipe
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```TEBAK KABUPATEN```\n\n• *soal* :'+pertanyaansust+'\n• *Katagori²* :'+tipe+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkabupaten[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakbendera))
})
              await sleep(50000)
              if (tebakkabupaten.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkabupaten[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakkabupaten))
}
              break
			  
			  
			  case 'tebakkimia':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkimia.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.unsur
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.lambang
              botzari.sendMessage(from, '*+* ```TEBAK KIMIA```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkimia[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakbendera))
})
              await sleep(50000)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
}
              break
			  
			  
			   case 'tebaklirik':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebaklirik.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```TEBAK LIRIK```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebakbendera))
})
              await sleep(50000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              break
			  
			  
			   
			   case 'tebaktebakan':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebaktebakan.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```TEBAK TEBAKAN```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(50000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              break
			  
			  
			   
			   case 'tekateki':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tekateki.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              botzari.sendMessage(from, '*+* ```TEKA TEKI```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tekateki[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
})
              await sleep(50000)
              if (tekateki.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tekateki[sender.split('@')[0]]
              fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
}
              break
			  
			  
//━━━━━━━━━━━━━━━[ FITUR OTHER ] ━━━━//

case 'limit':
if (isLimit(serial)) return reply(`_Hai ${pushname} Limit request anda sudah mencapai batas, Akan direset kembali setiap jam 9 dan gunakan seperlunya!_`)
                    var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.serial === pengirim) {
                            let limitCounts = limitCount - lmt.limit
                            if (limitCounts <= 0) return botzari.reply(from, `Limit request anda sudah habis\n\n_Note : Jika ingin menambah limit silahkan chat owner`, id)
                            reply(`Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Jika ingin menambah limit silahkan chat owner`)
                            botzari.sendContact(ownerNumber)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { serial: `${pengirim}`, limit: 1 };
                        limit.push(obj);
                        fs.writeFileSync('./database/limit.json', JSON.stringify(limit, 1));
                        reply(`Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Jika ingin menambah limit silahkan chat owner`)
                    }
		await limitAdd(serial)	
                    break






case 'bass':
 
            if (!isGroup) return reply(from, 'Perintah ini hanya bisa di gunakan dalam group!')
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length == 0) return reply(`*FORMAT SALAH*\n\nReply suara/vn dengan caption *${prefix}bass ukuran*\n\nContoh: ${prefix}bass 50`)                    
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await botzari.sendPtt(from, fileOutputPath)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    reply(`*FORMAT SALAH*\n\nReply suara/vn dengan caption *${prefix}bass ukuran*\n\nContoh: ${prefix}bass 50`)
                }
            break





case 'tiktokviews':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`TOOLS TAMBAH VIEWS\n\nPenggunaan ${prefix + command} link vidio tiktok\n\nCONTOH  ${prefix + command} https://www.tiktok.com/@botari/video/702621795693795345`)
link = args.join(" ")
reply(`SUKSES AUTO VIEWS TIKTOK\n\n Link: ${link}\nJumlah: 100\n\nHarap kasih jeda 30 menit jika link vidio ke tujuan yang sama \n`)
get_result = await fetchJson(`https://beli-followers-shop.ga/bot/proses.php?target=${link}&jmh=100&idd=1968`)
break
case 'igviews':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`TOOLS TAMBAH VIEWS\n\nPenggunaan ${prefix + command} link vidio instagram\n\nCONTOH  ${prefix + command} https://www.instagram.com/p/CVKO16phLjse/`)
link = args.join(" ")
reply(`SUKSES AUTO VIEWS INSTAGRAM\n\n Link: ${link}\nJumlah: 100\n\nHarap kasih jeda 30 menit jika link vidio ke tujuan yang sama \n`)
get_result = await fetchJson(`https://beli-followers-shop.ga/bot/proses.php?target=${link}&jmh=100&idd=2073`)
break















	  
			  
			  
			  case 'apkmod':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
			  if (args.length == 0) return reply(`Mau cari aplikasi apa? \nContoh : ${prefix + command} kinemaster premium`)
			  query = args.join(" ")
			  get_result = await fetchJson(`https://api.dapuhy.ga/api/search/moddroid?query=${query}&apikey=${apidapuy}`)
			  get_result = get_result.result
			  ini_txt = ""
			  for (var x of get_result) {
			  ini_txt += `Nama Aplikasi : ${x.title}\n\n`
			  ini_txt += `LINK DOWNLOAD : ${x.url}\n\n\n`
			}
			  reply(ini_txt)
			  break
			  
			  
			  
			  
			
//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER sleep(30000) = 30 detik]━━━━━━━━━━━━━━━━━//




case 'ceritahoror':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/horor?apikey=vinko`)
get_result = get_result.result
reply(`${get_result}`)
break






case 'ytplay':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Nya Mana \nContoh: ${prefix + command} sayang 2`)
ini_link = args.join(" ")
get_result = await fetchJson(`https://hadi-api.herokuapp.com/api/ytplay?q=${ini_link}`)
get_result = get_result.result
linkk = await fetchJson(`http://hadi-api.herokuapp.com/api/tinyurl?url=${get_result.download_audio}`)
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${linkk.result} `
ini_buffer = await getBuffer(get_result.thumb)
await botzari.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.download_audio)
await botzari.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break


case 'ytsearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari \nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/ytsearch?query=${query}&apikey=${apizen}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.ago}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break





case 'xnxxsearch':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari \nContoh : ${prefix + command} japanese`)
query = args.join(" ")
get_result = await fetchJson(`https://api-xcoders.xyz/api/search/xnxx?query=${query}&apikey=soWl6ZU3DK`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Durasi : ${x.duration}\n`
ini_txt += `Link : ${x.link}\n\n`
}
reply(ini_txt)
break
case 'xnxx':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.xnxx.com/vidjsidj\n\n atau cari link di .xnxxsearch nama`)
ini_link = args[0]
get_audio = await fetchJson(`https://api-xcoders.xyz/api/download/xnxx?url=${ini_link}&apikey=soWl6ZU3DK`)
get_audio = get_audio.result
textt = `TUNGGU VIDIO SEDANG DIKIRIM JIKA TIDAK DIKIRIM SAMA BOT ATAU TIDAK SABAR MENUNGGU BISA DOWNLOAD MELALUI LINK BERIKUT \nSUPPORT STREAMING ONLINE ANTI BLOKIR INTERNET POSITIF\nDOWNLOAD : ${get_audio.url} `
reply(textt)
ini_buffer = await getBuffer(get_audio.url)
await botzari.sendMessage(from, ini_buffer, video, { quoted: ftrol })
break

case 'randomcersex':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://api-xcoders.xyz/api/random/cersex?apikey=BkvgezF5S4`)
anu = anu.result
judul = anu.title
isi = anu.cerita
isii = (`Judul: ${judul}\n\n ${isi}`)
ima = await getBuffer(anu.thumbnail)
await botzari.sendMessage(from, ima, image, { caption: isii, quoted: mek })

break

case 'aku1':
              if (args.length == 0) return reply(`Judul Nya Mana \nContoh: ${prefix + command} tante`)
ini_link = args.join(" ")
              predea = await axios.get('https://h4ck3rs404-api.herokuapp.com/api/cersex?apikey=404Api&q=tete')
              reply(`Nama : ${predea.data.result.cersex}\n*Mati Pada Umur :* ${predea.data.result.title} `)
              break


case 'hentaividio':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://zenzapi.xyz/api/hentaivid?apikey=${apizen}`)
ini_buffer = await getBuffer(get_result.result.video_2)
await botzari.sendMessage(from, ini_buffer, video, { quoted: mek })
break

case 'tiktokporn':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://zenzapi.xyz/api/tikporn?apikey=${apizen}`)
ini_buffer = await getBuffer(get_result.result.video)
await botzari.sendMessage(from, ini_buffer, video, { quoted: mek })
break








case 'ytmp3':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih yt mp3 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp3a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
reply(`pilih yt mp3 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp3a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
break
case 'ytmp3a':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/ytmp3/2?apikey=${apizek}&url=${ini_link}`)
get_result = (get_result.result)
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.link} `
ini_buffer = await getBuffer(get_result.thumb)
await botzari.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.link)
await botzari.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break

case 'ytmp3b':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/ytmp3?url=${ini_link}&index=2&apikey=${apizen}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Channel     : *${get_result.channel}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.url} `
ini_buffer = await getBuffer(get_result.thumb)
await botzari.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.url)
await botzari.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytmp4':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih yt mp4 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp4a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
reply(`pilih yt mp4 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp4a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
break
case 'ytmp4b':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/ytmp4?url=${ini_link}&apikey=${apizen}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Channel     : *${get_result.channel}*`
caption += `\n\n❖ Tunggu Vidio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.url} `

ini_buffer = await getBuffer(get_result.thumb)
await botzari.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.url)
await botzari.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol })
break
case 'ytmp4a':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/ytmp4/2?apikey=${apizek}&url=${ini_link}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Vidio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.link} `

ini_buffer = await getBuffer(get_result.thumb)
await botzari.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.link)
await botzari.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol })
break
case 'iglol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
ini_link = args[0]
reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
break
case 'igvidlol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=cf986e139a11690077304d29&url=${ini_link}`)
get_audio = get_audio.result
await botzari.sendMessage(from, get_audio, video, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'igpostlol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=cf986e139a11690077304d29&url=${ini_link}`)
get_audio = get_audio.result
await botzari.sendMessage(from, get_audio, image, { mimetype: Mimetype.image, quoted: ftrol })
break



case 'ig':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio  = .ig1vid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .ig1post https://www.instagram.com/p/CU0MhPjBZO2/`)
ini_link = args[0]
reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
break
case 'igvid':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api-xcoders.xyz/api/download/ig?url=${ini_link}&apikey=soWl6ZU3DK`)
get_audioo = await getBuffer(get_audio.result.url)
iki = (`Sedang di proses kalau bot tidak kirim vidio nya bisa download melalui link berikut ${get_audio.result.url}`)
reply(iki)
await botzari.sendMessage(from, get_audioo, video, { mimetype: 'video/mp4', filename: `${get_audio.result.name}.mp4`, quoted: ftrol })
break
case 'igpost':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api-xcoders.xyz/api/download/ig?url=${ini_link}&apikey=soWl6ZU3DK`)
iki = (`Sedang di proses kalau bot tidak kirim foto nya bisa download melalui link berikut ${get_audio.result.url}`)
reply(iki)
get_audioo = await getBuffer(get_audio.result.url)
await botzari.sendMessage(from, get_audioo, image, { mimetype: Mimetype.image, quoted: ftrol })
break
case 'igtv':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api-xcoders.xyz/api/download/igtv?url=${ini_link}&apikey=soWl6ZU3DK`)
iki = (`Sedang di proses kalau bot tidak kirim foto nya bisa download melalui link berikut ${get_audio.result.data.url}`)
reply(iki)
get_audioo = await getBuffer(get_audio.result.data.url)
await botzari.sendMessage(from, get_audioo, image, { mimetype: Mimetype.image, quoted: ftrol })
break

case 'cocofun':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} http://i.coco.fun/short/jnl5to`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.dapuhy.ga/api/socialmedia/cocofun?url=${ini_link}&apikey=${apidapuy}`)
await botzari.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', quoted: ftrol })
break






case 'tiktok':
reply(`pilih SERVER TIKTIOK \n\n TIKTOK VIDIO DOWNLOADER \nContoh:\n.tiktokvid1 https://vt.tiktok.com/ZSwWCk5o/ \nAtau\n.tiktokvid2 https://vt.tiktok.com/ZSwWCk5o/ \n\n TIKTOK AUDIO DOWNLOADER \nContoh:\n.tiktokaudio1 https://vt.tiktok.com/ZSwWCk5o/ \nAtau\n.tiktokaudio2 https://vt.tiktok.com/ZSwWCk5o/`)
break
case 'tiktokvid1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.dapuhy.ga/api/socialmedia/tiktoknowm?url=${ini_link}&apikey=${apidapuy}`)
await botzari.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', quoted: ftrol })
break
case 'tiktokvid2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/tiktokder?url=${ini_link}&apikey=${apidapuy}`)
get_audioo = await getBuffer(get_audio.result.nowm)
await botzari.sendMessage(from, get_audioo, video, { mimetype: 'video/mp4', quoted: ftrol })
break
case 'tiktokaudio1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/nguteksnaptik?url=${ini_link}&apikey=${apidapuy}`)
get_audio = await getBuffer(get_audio.download.music)
await botzari.sendMessage(from, get_audio, audio, { quoted: ftrol })
break
case 'tiktokaudio2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana \nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/musical?url=${ini_link}&apikey=${apidapuy}`)
get_audio = await getBuffer(get_audio.result.mp3.direct_link)
await botzari.sendMessage(from, get_audio, audio, { quoted: ftrol })
break








case 'pinterest':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://zenzapi.xyz/api/pinterest2?query=${query}&apikey=${apizen}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'joox1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Cari apa \n Contoh: ${prefix + command} snowman`)
ini_link = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/joox?apikey=${apizek}&q=${ini_link}`)
get_result = (get_result.data)
ini = (`Judul: ${get_result.judul} - ${get_result.artist}\njika bot belum kirimkan audio nya dan engga sabar tungguin bisa download melalui link berikut : ${get_result.audio}`)
reply(ini)
get_audioo = await getBuffer(get_result.audio)
await botzari.sendMessage(from, get_audioo, audio, { mimetype: 'audio/mp4', filename: `${get_resul.judul}.mp3`, quoted: mek })
break
case 'joox':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`cari apa\nContoh: ${prefix + command} snowman`)
ini_link = args[0]
get_audio = await fetchJson(`https://zenzapi.xyz/api/downloader/joox?query=${ini_link}&apikey=${apizen}`)
get_result = (get_audio.result)
ini = (`Judul: ${get_result.lagu} - ${get_result.penyanyi}\njika bot belum kirimkan audio nya dan engga sabar tungguin bisa download melalui link berikut : ${get_result.mp3Link}`)
reply(ini)
get_audioo = await getBuffer(get_result.mp3Link)
await botzari.sendMessage(from, get_audioo, audio, { mimetype: 'audio/mp4', filename: `${get_result.lagu}.mp3`, quoted: mek })
break



case 'jooxlirik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`cari apa\nContoh: ${prefix + command} snowman`)
ini_link = args[0]
get_audio = await fetchJson(`https://zenzapi.xyz/api/downloader/joox?query=${ini_link}&apikey=${apizen}`)
ini = (`Lirik  : ${ini_link} \n\n ${get_audio.lirik.result}`)
reply(ini)
break

case 'texttovoice':
if (isBanned) return reply(`Ga bisa akses lu di ban`)
if (args.length == 0) return reply(`mau  buat suara apa ngap\n Contoh: ${prefix + command} Ari ganteng`)
query = args.join(" ")
get_result = await getBuffer(`https://api.dapuhy.ga/api/maker/tts?text=${query}&lang=id&apikey=${apidapuy}`)
await botzari.sendMessage(from, get_result, audio, { mimetype: 'audio/mp4', quoted: mek })
break

//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//

case 'character':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await botzari.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'manga':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await botzari.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'anime':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await botzari.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'kusonimesearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'otakudesusearch':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apilol}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//
case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(botzari.chats.get(ido).presences), botzari.user.jid]
             botzari.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break











case 'kkbi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Kata apa yang mau lu cari di kkbi\nContoh: ${prefix + command} pohon`)
query = args.join(" ")
anu = await fetchJson(`https://janbot-api.herokuapp.com/api/info/kbbi?kata=${query}`)
ini_txt += `Kata : ${anu.result.lema}\nArti : ${anu.result.arti}\n`
reply(ini_txt)
break
case 'jarak':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana \nContoh: ${prefix + command} jakarta  yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apilol}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana \nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/wikipedia?query=${query}&apikey=${apizen}`)
get_result = get_result.result
los = `Judul: ${get_result.judul} \n\n Isi: ${get_result.isi}`
reply(los)
break
case 'translate':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana \nContoh: ${prefix + command} en Tahu Bacem  \n\n untuk en adalah inggris silahkan cari kode negara masing-masing`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/translate/${kode_negara}?query=${ini_txt}&apikey=${apizen}`)
get_result = get_result.result
init_txt += `Kode Negara : ${kode_negara}\n`
init_txt += `Original : ${ini_txt}\n`
init_txt += `Translated : ${get_result}\n`
reply(init_txt)
break
case 'jadwaltv':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Channel Nya Mana \nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/jadwaltv?apikey=${apizek}&channel=${channel}`)
get_result = get_result.result
ini_txt = `Pencarian TV  ${channel}\n\n ${get_result}`
reply(ini_txt)
break
case 'infogempa':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api-xcoders.xyz/api/info/gempa?apikey=IVXZfPp95P`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Koordinat : ${get_result.koordinat}\n`
ini_txt += `Bujur & Lintang : ${get_result.lokasi}\n`
ini_txt += `Dirasakan : ${get_result.dirasakan}`
get_buffer = await getBuffer(get_result.thumbnail)
await botzari.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'cuaca':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana \nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api-xcoders.xyz/api/info/cuaca?query=${daerah}&apikey=IVXZfPp95P`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.Nama}\n`
ini_txt += `Cuaca : ${get_result.Cuaca}\n`
ini_txt += `Angin : ${get_result.Angin}\n`
ini_txt += `Description : ${get_result.Keterangan}\n`
ini_txt += `Kelembapan : ${get_result.Kelembaban}\n`
ini_txt += `Suhu : ${get_result.Suhu}\n`
ini_txt += `Udara : ${get_result.Udara}\n`
await botzari.sendMessage(from, { degreesLatitude: get_result.Latitude, degreesLongitude: get_result.Longitude }, location, { quoted: mek })
reply(ini_txt)
break
case 'covidindo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://covid19.mathdro.id/api/countries/indonesia`)
ini_txt = `Positif : ${get_result.confirmed.value}\n`
ini_txt += `Sembuh : ${get_result.recovered.value}\n`
ini_txt += `Meninggal : ${get_result.deaths.value}`
reply(ini_txt)
break
case 'covidglobal':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.kawalcorona.com/`)
get_result = get_result.attributes
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
case 'quote':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotes = await fetchJson(`https://zenzapi.xyz/api/random/quote?apikey=${apizen}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
case 'quoteanime':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotes = await fetchJson(`https://zenzapi.xyz/api/animequotes?apikey=${apizen}`)
quotes = quotes.result
quote = quotes.en
quote1 = quotes.id
char = quotes.character
anime = quotes.anime
reply(`_${quote}_\n${quote1}\n*― ${char}*\n*― ${anime}*`)
break
case 'quotesdilan':
case 'quotedilan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/dilanquote?apikey=${apizen}`)
reply(quotedilan.result.message)
break
case 'randomnama':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apilol}`)
reply(anu.result)
break

case 'simi1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pertanyaan nya \nContoh: ${prefix + command} lagi apa `)
query = args.join(" ")
anu = await fetchJson(`https://api.simsimi.net/v2/?text=${query}&lc=id&cf=API-TEST-WEB`)
reply(anu.success)
break6
case 'simii':
reply(`fitur di nonaktifkan owner`)
break

case 'simi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pertanyaan nya \nContoh: ${prefix + command} lagi apa `)
query = args.join(" ")
anu = await fetchJson(`https://yuzzu-api.herokuapp.com/api/simi?text=${query}`)
reply(anu.result)
break
case 'pantunpakboy':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/random/pantunpakboy.json`)
get_result = get_result[Math.floor(Math.random() * get_result.length)]
reply(get_result.result)
break
case 'gombalpakboy':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://api.zeks.me/api/pantun?apikey=${apizek}&`)
reply(quotedilan.result.pantun)
break
case 'faktaunik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/faktaunik?apikey=${apizen}`)
reply(quotedilan.result)
break
case 'pantun':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/pantun?apikey=${apizen}`)
reply(quotedilan.result)
break
case 'puisi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/puisi?apikey=${apizen}`)
reply(quotedilan.result.message)
break
case 'quotesislami':
case 'quoteislami':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/randomquote/muslim?apikey=${apizen}`)
ini_txt = `Positif : ${quotedilan.result.text_id}`
reply(ini_txt)
break
case 'quotesimage':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=${apizen}`)
await botzari.sendMessage(from, get_result, image, { quoted: mek })
break
case 'katabijak':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/random/katabijak.json`)
get_result = get_result[Math.floor(Math.random() * get_result.length)]
reply(get_result.quotes)
break
case 'quoteslucu':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://api.dapuhy.ga/api/fun/quoteslucu?apikey=${apidapuy}`)
reply(anu.quotes)
break

case 'katasenja':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://zenzapi.xyz/api/katasenja?apikey=${apizen}`)
reply(anu.result.message)
break
case 'quotesbucin':
case 'quotebucin':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://zenzapi.xyz/api/bucinquote?apikey=${apizen}`)
reply(anu.result.message)
break
case 'bikinquotes':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukan 1 kata saja\nContoh: ${prefix + command} lelah`)
query = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.ga/api/fun/jagokata?query=${query}&apikey=${apidapuy}`)
anu = anu.result
los = `Hasil: ${anu}`
reply(los)
break


case 'aku2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/cersex?apikey=404Api&q=tete`)
any = anu.result
los = `${anu.cersex}`
reply(los)
break





//━━━━━━━━━━━━━━  brainly ]━━━━━━━━━━━━━━━━━//




case 'brainly':
  	if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
				brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					botzari.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break




case 'cord':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Cord Yg Mau Dicari Mana \nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/chordlagu?lagu=${query}&apikey=beta`)
anu = anu.result
los = `Hasil: ${anu.result}`
reply(los)
break

case 'lirik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Lirik Yg Mau Dicari Mana \nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
anu = await fetchJson(`https://zenzapi.xyz/api/liriklagu?query=${query}&apikey=${apizen}`)
anu = anu.result
los = `Judul: ${anu.judul}\nPenyanyi : ${anu.penyanyi} \n\n Lirik : ${anu.lirik}`
reply(los)
break
case 'ppcouple':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://viko-api.herokuapp.com/api/random/couple?apikey=vinko`)
ppcwo = await getBuffer(get_result.result.ppcwo)
ppcwe = await getBuffer(get_result.result.ppcwe)
await botzari.sendMessage(from, ppcwe, image, { quoted: mek })
await botzari.sendMessage(from, ppcwo, image, { quoted: mek })
break




case 'memeindo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://zenzapi.xyz/api/random/memeindo?apikey=${apizen}`)
await botzari.sendMessage(from, get_result, image, { quoted: mek })
break
case 'memeindo1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=${apizek}`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'darkjo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${apizek}`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'darkjokes':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/random/darkjokes.json`)
get_result = get_result[Math.floor(Math.random() * get_result.length)]
get_buffer = await getBuffer(get_result.bos)
await botzari.sendMessage(from, get_buffer, image, { quoted: mek })
break
case 'darkjokes1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/darkjoke?apikey=h4ck3rs404`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'darkjokes2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${apizek}`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'jokesreceh':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://candaan-api.vercel.app/api/image/random`)
ini_buffer = await getBuffer(get_result.data.url)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break


case 'bos':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
iki = (`YAP`)
reply(iki)
break
case 'hartatahta':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/hartatahta?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'hartatahtacustom':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/hartacustom?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'yasin':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/yasin?name=${query}&url=https://akuari.ga/sc%20bot/dbbot/image/kerenda-removebg-preview.png`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break


case 'nulisdepan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${apizek}&text=${query}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'nuliskanan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/nuliskanan?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'nuliskiri':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/nuliskiri?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'foliokiri':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/foliokiri?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'foliokanan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya \nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/foliokanan?text=${query}&apikey=${apidapuy}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break


//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage': 
if (!isPrem) return reply(`FITUR INI TERKUNCI. SILAHKAN DAFTAR 
AKSES KE OWNER ADMIN wa.me/628976388612 FREE \n\n FITUR TERKUNCI LAINYA BISA CEK 
CHAT .hiddenmenu`)


if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana \nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://zenzapi.xyz/api/gimage2?query=${query}&apikey=${apizen}`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'wallpapersearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana \nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${apilol}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'playstore':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Aplikasinya Mana \nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/sgplay?apikey=${apizek}&q=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.price}\n`
ini_txt += `Rating : ${x.rating}\n`
}
reply(ini_txt)
break
case 'shopee':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana \nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/shopee?apikey=${apizek}&q=${query}`)
get_result = get_result.data
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.terjual}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.location}\n`
ini_txt += `Link : ${x.url}\n\n`
ini_txt += `Informasi Barang : ${x.information}\n\n`
}
reply(ini_txt)
break
case 'google':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana \nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/google-search?text=${query}&apikey=${apibx}`)
get_result = get_result.data
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Namamya Mana \nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/artinama?text=${ini_nama}&apikey=${apizen}`)
get_result = get_result.result
reply(get_result.message)
break
case 'artimimpi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`mimpinya Mana \nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/artimimpi?query=${ini_nama}&apikey=${apizen}`)
get_result = get_result.result
reply(get_result.message)
break
case 'jodoh':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`jodohnya Mana \nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://zenzapi.xyz/api/jodoh?text=${nama1}&text2=${nama2}&apikey=${apizen}`)
get_result = get_result.result.message
ini_txt = `Nama Anda : ${get_result.namaAnda}\n`
ini_txt = `Nama Pasangan : ${get_result.namaPasangan}\n`
ini_txt = `Positif : ${get_result.positif}\n`
get_buffer = await getBuffer(get_result.love)
await botzari.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'jadian':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal Jadiannya Mana \nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${apizen}`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break
case 'haribaik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal nya Mana \nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/haribaik/${tanggal}/${bulan}/${tahun}?apikey=${apizen}`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break

case 'harilarangan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal nya Mana \nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/harilarangan/${tanggal}/${bulan}/${tahun}?apikey=${apizen}`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break
case 'tebakumur':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Namanya Mana \nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${apilol}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana \nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api-xcoders.xyz/api/stalk/ig?username=${username}&apikey=IVXZfPp95P`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.profile_url)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.full_name}\n`
ini_txt += `Posts : ${ini_result.posts_count}\n`
ini_txt += `Followers : ${ini_result.following}\n`
ini_txt += `Following : ${ini_result.followers}\n`
ini_txt += `Bio : ${ini_result.biography}`
botzari.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana \nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api-xcoders.xyz/api/stalk/tiktok?username=${stalk_toktok}&apikey=IVXZfPp95P`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.signature}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.heartsCount}\n`
ini_txt += `Video : ${get_result.videoCount}\n`
pp_tt = await getBuffer(get_result.profile)
botzari.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
break
case 'stalkgithub':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana \nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apilol}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
botzari.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE HIDDEN ]━━━━━━━━━━━━━━━━━//



case 'santuy':
case 'bocil':
case 'ukhty':
case 'cecan':
case 'geayubi':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/${command}`)
ini_buffer = await getBuffer(get_result.result.url)
await botzari.sendMessage(from, ini_buffer, video, { mimetype: 'video/mp4', quoted: mek })
break

case 'hijab':
case 'cecan':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/${command}`)
ini_buffer = await getBuffer(get_result.result.url)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case '62':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupan?apikey=${apidapuy}`)
await botzari.sendMessage(from, get_result, video, { mimetype: 'video/mp4', quoted: mek })
break
case 'rika':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanrikagusriani?apikey=${apidapuy}`)
await botzari.sendMessage(from, get_result, video, { mimetype: 'video/mp4', quoted: mek })
break
case 'randombokep':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api-xcoders.xyz/api/random/bokep?apikey=LZMLJ9KYlJ`)
reply(`Kunjungi link berikut untuk nonton bokep\nAnti di blokir 100%\n\n${get_result.result.url}`)
break







case 'ass':
case 'ahegao':
case 'bdsm':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'hentaigif':
case 'jahy':
case 'masturbation':
case 'nsfwNeko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/nsfw/${command}`)
ini_buffer = await getBuffer(get_result.result)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'waifu':
case 'shinobu':
case 'neko':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'kiss':
case 'hug':
case 'awoo':
case 'lick':
if (!isPrem) return reply(`ANDA BUKAN USER PREMIUM SILAHKAN KONTAK OWNER UNTUK MENDAPATKAN PREMIUM\n\n KETIK .owner`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
getBuffer(`https://janbot-api.herokuapp.com/api/sfw/${command}`).then((gambar) => {
botzari.sendMessage(from, gambar, image, { quoted: mek })
})
break
case 'bts':
case 'exo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apilol}`).then((gambar) => {
botzari.sendMessage(from, gambar, image, { quoted: mek })
})
break

case 'loli1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

case 'loli':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
iki = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=${apibx}`)
ini_buffer = await getBuffer(iki.link)
await botzari.sendMessage(from, ini_buffer, image, { quoted: mek })
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break



case 'orangganteng':
po = await getBuffer(`https://akuari.ga/sc%20bot/20211121_055056.jpg`)
await botzari.sendMessage(from, po, image, { quoted: mek })
break



case 'join':
                if (!isPrem) return reply('KHUSUS MEMBER PREMIUM')
                
                if (args.length == 0) return await reply('Link group tanpa https://\n\nContoh .join chat.whatsapp.com/fsekkeEgkaaD43g')
                var link = args[0].replace("chat.whatsapp.com/", "")
                await botzari.acceptInvite(link)
                break






case 'join1': 
             
             if (!isOwner) return reply(mess.only.owner)
             if (args.length == 0) return reply(`Link Nya Mana\nContoh: ${prefix + command}`)
            link = args[0].replace('https://chat.whatsapp.com/','')
            await botzari.acceptInvite (link)
             reply('Berhasil Masuk Grup')
             break


case 'public':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (banChats === false) return
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *PUBLIC-MODE* 」`)
                break
        case 'self':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (setting.banChats === true) return
                setting.banChats = true
              
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *SELF-MODE* 」`)
                break






case 'clearall': //menghapus seluruh pesan diakun bot
            if (!isOwner) return botzari.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            anu = await botzari.chats.all()
			for (let _ of anu) {
			await botzari.modifyChat(_.jid, 'clear')
			}
			reply(`Sukses clear all chat bot`)
			break
			


case 'clearall1':
if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
for (let { jid } of botzari.chats.all()) {

  // delete chat
  await botzari.modifyChat(jid, 'delete')
  
}

break
case 'delchat': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               botzari.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break


case 'cekpremium':
if (!isPrem) return reply(`Nomor anda tidak premium`)
reply(`Nomor Anda Terdaftar PREMIUM ✅❤️`)
break


case 'addrespon':
case 'addres':
			if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
case 'delres':
			if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
case 'listres':
             if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break



case 'addprem':
				if (!isPrem) return reply(`Lubukan User Preium  wkwkwk`)
				premm = body.slice(5)
				_prem.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('database/prem.json', JSON.stringify(_prem))
				reply(`Berhasil TAMBAH PREMIUM nomor : wa.me/${premm} `)
				break
case 'ban':
				if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				bnnd = body.slice(5)
				_ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('database/banned.json', JSON.stringify(_ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break

case 'unban':  
				if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
					delp = body.slice(7)
					_ban.splice(`${delp}@s.whatsapp.net`)
					fs.writeFileSync('database/banned.json', JSON.stringify(_ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break


case 'listban':
		case 'banlist'://By M4N1K
		if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
					teks = '*List Ban:*\n\n'
					for (let manikgans of _ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${_ban.length}*`
					botzari.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": _ban } })
					break



case 'done':
case 'owner':
        sendKontak(from, owner, `${ownername}`, `Pemilik ${botname}`);
        sendButMessage(
          from,
          `Mau tanyaĀ² tentang apa?`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}scjojobot`,
              buttonText: {
                displayText: `SCRIPT`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}igstalk sofunsyabi.id`,
              buttonText: {
                displayText: `INSTAGRAM`,
              },
              type: 1,
            },
          ]
        );
        break;
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await botzari.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await botzari.downloadMediaMessage(encmedia)
for (let _ of anu) {
botzari.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
botzari.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break

//━━━━━━━━━━━━━━━[ FITUR SEWA BOT ]━━━━━━━━━━━━━━━━━//

case 'sewabot':
but = [
{ buttonId: `${prefix}sebulan`, buttonText: { displayText: 'SEBULAN' }, type: 1 },
{ buttonId: `${prefix}permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
]
sendButton(from, "Silahkan Pilih List Sewa Di Bawah Ini", faketeks, but, mek)
break
case 'sebulan':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'permanen':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'gopay':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "GOPAY : SCAN PP (SALINI)", faketeks, but, mek)
break
case 'dana':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "DANA : 085727492435 (SUTARSIH)", faketeks, but, mek)
break
case 'ovo':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "SHOPEPAY : 085727492435 (Deva Nanda)", faketeks, but, mek)
break
				
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return botzari.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
