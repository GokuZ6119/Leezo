const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
  const embed = new Discord.MessageEmbed()
  .setTitle("Support de Leezo")
  .setThumbnail("https://i.imgur.com/F4ZeL68.png")
  .setDescription("Pour rejoindre le serveur support de Leezo [cliquez ici !](https://discord.gg/GFcEdDCeSj)")
  .setTimestamp()
  message.channel.send(embed)
}
module.exports.help = {
    name: "support",
};