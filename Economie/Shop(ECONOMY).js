const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
  const embedShop = new Discord.MessageEmbed()
  	.setTitle(`Shop de ${message.guild.name}`)
  	.addField('Articles disponibles : ', [
        `Un rôle  🔫-  Voleur`,
        `Un rôle  💳-  Riche`,
        `Un rôle  🚨-  Policier`
    ])
  	message.channel.send(embedShop)
  }
module.exports.help = {
    name: "shop",
};