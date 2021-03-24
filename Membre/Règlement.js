const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
   const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefixd
    const reglement = quick.get(`guild_${message.guild.id}_règlement`) || null
 
            if(message.author.bot) return;
            message.delete()
            const embed = new Discord.MessageEmbed()

            .setDescription(reglement)
            .setTimestamp()
            .setColor("#FFFF00")
			.setFooter(`Demandé par ${message.author.tag}.`)
            message.channel.send(embed)
        
};
module.exports.help = {
     name: "règlement",
};