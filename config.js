/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( Nama Lu )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['62831446703633']
global.ownernomer = "62831446703633"
global.premium = ['62831446703633']
global.packname = 'Sticker By'
global.author = 'Renz-Md'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/Yantogntng'
global.myyt = 'https://youtube.com/c/RENZ MD'
global.myytv = 'https://youtube.com/channel/UCYOpTOWfpGun22fv75SaoJQ'
global.mygc = "https://chat.whatsapp.com/JvKb2Wjt6Y2BaKiog61HqQ"
global.botname = 'RENZ BOTZ'
global.akulaku = 'Bot By Renz'
global.ytname = 'YT RENZ MD'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
