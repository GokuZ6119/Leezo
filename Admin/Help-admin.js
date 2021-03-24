const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
        const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
	message.delete()
    const embedAdmins = new Discord.MessageEmbed()
    .addField(`🛠️-️ ️**__Commandes de l'administration : __**`, [
        `✅ **${CustomPrefix}ban** [Membre] : Bannir un membre`,
        `❌ **${CustomPrefix}kick** [Membre] : Expulser un membre`,
        `❌ **${CustomPrefix}warn** [Membre] : Avertir un membre`,
        `✅ **${CustomPrefix}mute** [Membre] : Mute un membre`,
        `✅ **${CustomPrefix}unmute** [Membre] : unmute un membre`,
        `❌ **${CustomPrefix}lock** [Salon] : Vérouiller un salon`,
        `❌ **${CustomPrefix}unlock** [Salon] : Dévérouiller un salon`,
        `❌ **${CustomPrefix}warnlist** [Membre] : Voir les warns du membre`,
        `✅ **${CustomPrefix}clear** : Efface les messages`,
        `✅ **${CustomPrefix}sondage** [Question] : Faire un sondage`,
        `✅ **${CustomPrefix}addrole** [Membre] [Rôle]  : Ajouté un rôle à un membre`,
        `✅ **${CustomPrefix}removerole** [Membre] [Rôle]  : Retiré un rôle à un membre`,
        `✅ **${CustomPrefix}report** [Problème] : Signaler un beug`,
        `✅ **${CustomPrefix}clear-channel** : Supprime tout les messages du salon`,
        `✅ **${CustomPrefix}slowmode** [Durée (s)|(m)|(h)]: Supprime tout les messages du salon`,
    ])
    .setColor("#FFFF00")
    message.channel.send(embedAdmins)
}
module.exports.help = {
    name: 'admin',
};