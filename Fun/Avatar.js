const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
    message.delete()
  let member = message.mentions.users.first()
      var embedAuthor = new Discord.MessageEmbed()
      .setTitle("Voici ton avatar " + message.author.username)
      .setImage(message.author.avatarURL({size : 2048,dynamic: true}))
      .setTimestamp()
      if(!member) return message.channel.send(embedAuthor)
      var embed = new Discord.MessageEmbed()
      .setTitle("Voici l'avatar de " +member.username)
      .setImage(member.displayAvatarURL({size : 2048,dynamic: true}))
      .setTimestamp()
      message.channel.send(embed)

}
module.exports.help = {
    name: 'avatar',
};