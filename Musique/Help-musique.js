const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
message.delete()
          const embedMusique = new Discord.MessageEmbed()
        .addField(`**__Commandes musicales__**`, [
            `❌ **${CustomPrefix}play** [lien] : Joue le lien`,
            `❌ **${CustomPrefix}playlist** : Donne la file d'attente`,
            `❌ **${CustomPrefix}pause** : Met en pause l'audio en cours`,
            `❌ **${CustomPrefix}skip** : Passe à l'audio suivant`,
            `❌ **${CustomPrefix}stop** : Arrêtel'audio en cours`
        ])
        .setColor("#FFFF00")
        message.channel.send(embedMusique)
}
module.exports.help = {
	name: "musique",
};