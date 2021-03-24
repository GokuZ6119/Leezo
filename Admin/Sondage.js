const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
   const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefixd
    const sondage = quick.get(`guild_${message.guild.id}_sondage`) || null
 
    const SelectSondageChannel = message.guild.channels.cache.find(channel => channel.id === sondage[0]) || message.guild.channels.cache.find(channel => channel.name === sondage[0])
    if (!SelectSondageChannel) {
        return;
    } else {
        if(SelectSondageChannel.type === "text") { 
            if(message.author.bot) return;
            if (!message.member.hasPermission(['ADMINISTARTOR' , 'MANAGE_GUILD'])) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
            const poll = args.join(' ')
            if (!poll) return message.channel.send('Veuillez indiquer la question à poser !')
            message.delete()
 message.channel.send(`Sondage ajouté dans ${SelectSondageChannel}`)
            const embed = new Discord.MessageEmbed()

            .setTitle("**Nouveau sondage : **")
            .setDescription(poll)
            .setColor("#FFFF00")
            .setTimestamp()
			.setFooter(`Sondage proposé par ${message.author.tag}.`)
            SelectSondageChannel.send(embed).then(function (message){
            message.react('✅')
                message.react('❌')
            })
        };
    } 
}
module.exports.help = {
     name:"sondage",
};