const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
	const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    
    message.delete()
    const embedInvite = new Discord.MessageEmbed()
    .setTitle('Invite moi sur ton serveur ! ')
    .setAuthor('Leezo', 'https://i.imgur.com/rXfKZU7.png')
    .setDescription("Pour m'inviter sur ton serveur [clique ici !](https://discord.com/oauth2/authorize?client_id=813887130421821480&permissions=8&scope=bot)")
    .setColor("#FFFF00")
    .setFooter(`Demandé par ${message.author.tag}.`)
    .setTimestamp()
    message.channel.send(embedInvite)
}
module.exports.help = {
    name: "invite",
};