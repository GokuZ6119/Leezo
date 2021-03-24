const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
    const shop = quick.get(`guild_${message.guild.id}_shop`) || null  
    message.delete()   
    if(message.member.hasPermission("ADMINISTRATOR")) {  
    if(message.author.bot) return;
        if(message.guild) { 
        quick.set(`guild_${message.guild.id}_shop` , args.join(" "))
             
             message.channel.send(`Le shop à bien été configurer faite **${CustomPrefix}shop** pour l'afficher.`)
         }else { 
         
         }
     }else { 
     message.channel.send("Vous n'avez pas la permission d'utilisé cette commande !")
  }
}
module.exports.help = {
     name:"set-shop",
};