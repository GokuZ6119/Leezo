const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`)
    const reportchannel = client.channels.cache.find(channel => channel.id === "816505101027115078")
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permission d'utiliser cette commande !")
    
    message.delete()
        const report = new Discord.MessageEmbed()
        .setTitle(":bangbang:- NOUVEAU REPORT : ")
        .setDescription(`${message.author.tag} a signaler : **${message.content.slice(8)}**`)
        .setTimestamp()

        reportchannel.send(report).then(exe =>{ 
const embed = new Discord.MessageEmbed() 

.setDescription("Merci d'avoir signaler un problème, votre report à été envoyé sur le serveur support ")
.setColor("#FFF000")
        message.author.send(embed)
        message.reply("Report effectué, merci")
        })
        
}
module.exports.help = {
    name: "report",
};