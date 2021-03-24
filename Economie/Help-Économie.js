const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
        const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
	message.delete() 
    const embedEco = new Discord.MessageEmbed()
     .addField(`💸- **__Commandes d'économie : __**`, [
            `💸 **${CustomPrefix}daily** : Récupérer votre bonus quotidien `,
            `💸 **${CustomPrefix}work** : Travailler pour obtenir un salaire`,
            `💸 **${CustomPrefix}money** [membre] : Voir l'argent d'un membre`,
            `💸 **${CustomPrefix}lbmoney** : Classement des membres en fonction de leur argent`,
         	`💸 **${CustomPrefix}raid** : Raid le serveur pour obtenir de l'argent`,
         ])
        .setColor("#FFFF00")
        message.channel.send(embedEco)
}
module.exports.help = {
    name: "éco",
};