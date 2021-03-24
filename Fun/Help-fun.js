const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
        const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
	message.delete()
    const embedAdmins = new Discord.MessageEmbed()
    .addField(`🛠️-️ ️**__Commandes pour s'amuser : __**`, [
        `✅ **${CustomPrefix}blush** <membre> : Faire rougir un membre`,
        `✅ **${CustomPrefix}kiss** <membre> : Embrasser un membre`,
        `✅ **${CustomPrefix}cry** <membre> : Faire pleurer un membre`,
        `✅ **${CustomPrefix}slap** <membre> : Frapper un membre`,
        `✅ **${CustomPrefix}hug** <membre> : Faire un calin à un membre`,
        `✅ **${CustomPrefix}8ball** <question> : Recevoir une réponce aléatoire`,
        `✅ **${CustomPrefix}say** <texte> : Renvoi le texte`,
        `✅ **${CustomPrefix}fond** : Renvoi des fonds d'écrans aléatoire`,
        `✅ **${CustomPrefix}kill** <membre> : Tuer un membre`,
        `✅ **${CustomPrefix}pfc** <membre> : Jouer à pierre, feuille, ciseaux`,
    ])
    .setColor("#FFFF00")
    message.channel.send(embedAdmins)
}
module.exports.help = {
    name: 'fun',
};