const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
        const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
	message.delete()
        const embedMembres = new Discord.MessageEmbed()
        .addField(`📦- **__Commandes des membres : __**`, [
            `✅ **${CustomPrefix}avatar** [membre] : Donne l'avatar du membre`,
            `✅ **${CustomPrefix}bot** : Donne les infos sur le bot`,
            `✅ **${CustomPrefix}ping** : Donne la latence du bot`,
            `✅ **${CustomPrefix}règlement** : Donne le réglement du serveur`,
            `✅ **${CustomPrefix}say** [texte] : Renvoie le texte`,
            `✅ **${CustomPrefix}serveur**: Donne les infos sur le serveur`,
            `✅ **${CustomPrefix}suggestion** [suggestion] : Faire une suggestion`,
            `❌ **${CustomPrefix}support** : Donne le serveur support du bot`,
            `✅ **${CustomPrefix}user** [membre] : Information sur un membre`,
            `✅ **${CustomPrefix}invite** : Pour inviter le bot sur votre serveur`,
            `✅ **${CustomPrefix}invites** : Pour voir le nombre d'invitation que vous avez`,
            `❌ **${CustomPrefix}lbinvites** : Classement des membre par invitations (**SOON**)`,
            `✅ **${CustomPrefix}liste** : Liste des serveurs où est le bot`,
            `✅ **${CustomPrefix}rank** [membre] : Afficher votre niveau ou celui d'un membre sur le serveur`,
        ])
        .setColor("#FFFF00")
        message.channel.send(embedMembres)
}
module.exports.help = {
    name: 'membre',
};