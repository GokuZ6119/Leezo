const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix  
      message.delete()  
      const embed = new Discord.MessageEmbed()
  .setTitle('Ticket')
  .setColor('#FFF000')
  .setDescription('Appuyez sur 🎟️ pour ouvrir un ticket')
  .setTimestamp()
  message.channel.send(embed).then(msg => msg.react('🎟️'))
    
}
module.exports.help = {
  name: "ticket"
}