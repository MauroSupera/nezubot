const fs = require("fs")
const chalk = require("chalk")

//===================================== 
// mudar logos 
global.log0 = "https://telegra.ph/file/bf8b7fcd1521fa02a3d58.jpg" 
global.thumb = "https://telegra.ph/file/bf8b7fcd1521fa02a3d58.jpg"
global.err4r = "https://telegra.ph/file/bf8b7fcd1521fa02a3d58.jpg"
//=====================================//
// alterações dono
global.numerodonoa = ["258858119033"] 
global.lolhuman = "RelzzAPIs"
global.banChats = false
global.wlcm = []
global.banChats = false
global.gcrevoke = [] 
global.packname = "© Copyright by Mauro2022 "
global.packname2 = `https://wa.me/+7987443-74-84`
global.author = "Mauro"
global.sessionName = "ITACHI"
global.NomeDoBot = "Itachi-BOTMD"
global.linkgrupss = "https://chat.whatsapp.com/JWUduq5Kmeg5dn9fwsMvSm"
global.prefix = "."
global.NickDono = "Bronxys"
global.websitex = "https://dashboard.bronxys.online"

//=====================================//
// mensagens 
global.mess = {
    success: '『❗ 』Prontinho mestre!',
    admin: ' 『 ❗ 』Apenas adm pode utilizar esse comando.',
    botAdmin: ' 『 ❗ 』Bot precisa ser adm para executar o comando.',
    owner: ' 『 ❗ 』Somente meu mestre pode utilizar esse comando!',
    group: ' 『 ❗ 』Esse comando só pode ser utilizado em grupo!',
    private: ' 『 ❗ 』Esse comando só pode ser utlizado no pv!',
    bot: ' 『 ❗ 』Recurso específico para o próprio número do bot.',
    wait: 'Aguarde, estou atendendo seu pedido...!',
    linkm: ' 『 ❗ 』Cadê o link?',
    donosmt: ' 『 ❗ 』Este é um recurso especial para meu mestre!',
    premium: ' 『 ❗ 』Esse recurso é especial para usuários premium.',
    ban: ' 『 ❗ 』Você foi banido pelo dono, se quiser ser desbanido do bot fale com meu dono!'
}

//===================================== 


//===================================== 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//===================================== 



//===================================== 


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
