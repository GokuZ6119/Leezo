const Discord = require('discord.js');
const quick = require('quick.db')
const pagination = require('discord.js-pagination')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
  message.delete()

   // const arraySort = require("array-sort")
   // const table = require("table")
    const guilds = client.guilds.cache.map(guild => `**${guild.name} :** `  + guild.memberCount + ' membres').join("\n");
    	const embed = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .addField("Liste des serveurs où je suis :\n", [
            `${guilds}`
        ])
        .setTimestamp()
      message.channel.send(embed)
}
module.exports.help = {
    name: "liste",
};