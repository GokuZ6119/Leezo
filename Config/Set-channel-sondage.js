const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefixd
    const sondage = quick.get(`guild_${message.guild.id}_sondage`) || null     
    if(message.member.hasPermission("ADMINISTRATOR")) {  
    if(message.author.bot) return;
        if(message.guild) {
    	if(!args) return message.channel.send("Veuillez indiquez l'id du salon de sondage !")
        quick.set(`guild_${message.guild.id}_sondage` , args)
             
             message.channel.send(`Le salon sondage configuré est :  ` + args)
         }else { 
         
         }
     }else { 
     message.channel.send("Vous n'avez pas la permission d'utilisé cette commande !")
  }
}
module.exports.help = {
     name:"set-salon-sondage",
};