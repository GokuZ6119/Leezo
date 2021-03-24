const Discord = require('discord.js');
const quick = require('quick.db')
const prefix = "="

module.exports.run = async (client, message) => {
    
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
        if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) { 
        message.reply("Vous n'avez pas la permission d'utiliser cette commande !")
      }else {
        if(!args) { message.reply("Veuillez fournir un préfix valide")} 
            if(args === quick.get(`guild_${message.guild.id}_prefix`)) { message.reply(`Mon prefix est déjà **${CustomPrefix}**, veuillez fournir un prefix valide !`)}else { 
         
            quick.set(`guild_${message.guild.id}_prefix` , args)
            if(args) return message.reply('Le nouveau prefix est :' + `**${args}**`).then(Func => {
                termux(`${message.guild.name} a changer leur prefix: ${CustomPrefix}`)
            })
          }
      }
}


module.exports.help = {
    name: 'set-prefix',
};