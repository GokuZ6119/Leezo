    const Discord = require('discord.js');
    const quick = require('quick.db');
    
module.exports.run = async (client, message, args) => { 
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    message.delete()
        const embedConfig = new Discord.MessageEmbed()
        .addField(`**__Commandes de configuration__**`, [
            `✅ **${CustomPrefix}set-prefix** [prefix] : Changer le prefix du bot`,
            `✅ **${CustomPrefix}set-salon-bienvenue** [id du salon] : Configurer le salon de bienvenue`,
            `✅ **${CustomPrefix}set-salon-sondage** [id du salon] : Configurer le salon où les sondage seront envoyée`,
            `✅ **${CustomPrefix}set-salon-suggestion** [id du salon] : Configurer le salon où les suggestions seront envoyée`,
            `✅ **${CustomPrefix}set-role-membre** [id du rôle] : Configurer le rôle membre pour les commandes **lock** et **unlock**`,
            `✅ **${CustomPrefix}set-salon-logs** [id du salon] : Configurer le salon des logs`,
        ])
        .setColor("#FFFF00")
        message.channel.send(embedConfig)
    }
    module.exports.help = {
    	name: "config",
    };