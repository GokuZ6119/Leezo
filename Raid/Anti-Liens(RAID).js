const Discord = require("discord.js")
const quick = require("quick.db")
const prefix = '='

module.exports.run = (client , message) => { 
    const CustomPrefix = quick.get(`guild_${message.guild.prefix}_prefix`) || prefix
    const anti = quick.get(`guild_${message.guild.id}_anti`) || null
const argv = message.content.slice(" ").trim().split(/ +/)
const cmd = argv.shift().toLowerCase() 
const args = argv.join(' ')
if(message.member.hasPermission(['ADMINISTRATOR' , "MANAGE_GUILD"])) { 
if(args === "on") { 
quick.set(`guild_${message.guild.id}_anti` , true)
    
    message.channel.send("l'anti-link est activé")
}else if(args === "off") { 
quick.set(`guild_${message.guild.id}_anti` , false)
    
        message.channel.send("L'anti-link est désactivé")
}else message.channel.send("Vous ne pouvez utiliser que la fonction on ou off")
    
}else message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
}

module.exports.help = { 
name: "anti-link"
}