const Discord = require('discord.js');
const quick = require('quick.db')
const prefix = "="

module.exports.run = async (client, message) => {
        const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
	message.delete()
    const embedAdmins = new Discord.MessageEmbed()
    .addField(`🔞-️ ️**__Commandes NSFW : __**`, [
        `✅ **${CustomPrefix}waifu** <membre> : Envoyer un GIF ou une photo X à un membre`,
        `✅ **${CustomPrefix}suck** <membre> : Sucer un membre`,
        `✅ **${CustomPrefix}neko** <membre> : Envoyer un nude à un membre`,
    ])
    .setColor("#FFFF00")
    message.channel.send(embedAdmins)
}
module.exports.help = {
    name: 'nsfw',
};