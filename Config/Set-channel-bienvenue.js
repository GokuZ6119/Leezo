const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix

      const welcome = quick.get(`guild_${message.guild.id}_welcome`)|| null
      if(message.member.hasPermission("ADMINISTRATOR")) {  
    if(message.author.bot) return;
        if(message.guild) {
    	if(!args) return message.channel.send("Veuillez indiquez l'id du salon de bienvenue !")
        quick.set(`guild_${message.guild.id}_welcome` , args)
             
             message.channel.send(`Le salon de bienvenue configuré est :  ` + args)
         }else { 
         
         }
     }else { 
     message.channel.send("Vous n'avez pas la permission d'utilisé cette commande !")
  }
}
        
module.exports.help = {
     name:"set-salon-bienvenue",
};