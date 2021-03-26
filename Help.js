const Discord = require("discord.js")
const quick = require("quick.db")

const prefixd = "="
module.exports.run = (client , message) => { 
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) 
  if(!CustomPrefix) { message.channel.send("Utilise **set-prefix** [Nouveau prefix]") } else { 
if(CustomPrefix) { 
  const embedHelp = new Discord.MessageEmbed()

          .addField(`**__Help général : __**`, [
            `📦- **${CustomPrefix}membre** : Liste des commandes accessibles aux membres`,
            `🛠️- **${CustomPrefix}admin** : Liste des commandes de l'administration`,
            `🎶- **${CustomPrefix}musique** : Liste des commandes de musique`,
            `⚙️- **${CustomPrefix}config** : Liste des commandes de configuration du bot`,
            `🛍️- **${CustomPrefix}fun** : Liste des commandes pour s'amuser`,
            `🔞- **${CustomPrefix}nsfw** : Liste des commandes nsfw`,
            `💸- **${CustomPrefix}économie** : Liste des commandes d'économie`,
            `🔒- **${CustomPrefix}raid** : Liste des commandes contre le raid`,
        ])
            .setTimestamp()
  			.setColor("#FFFF00")
            message.channel.send(embedHelp)
}
}
}
module.exports.help = { 
    name: "help"
}