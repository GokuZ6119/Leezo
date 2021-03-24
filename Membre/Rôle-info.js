const Discord = require('discord.js')
const quick = require ('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
    message.delete()
  const role = message.mentions.roles.first()
  if (!role) return message.channel.send('Veuillez mentionner le rôle dont vous voulez voir les infos !')
  let roleembed = new Discord.MessageEmbed()

  .addField('Rôle', role, true)
  .addField('Membres possédant ce rôle :  ', role.members.size, true)
  .addField('Couleur :  ', role.hexColor, true)
  .addField('Date de création :  ', new Date(role.createdAt).toLocaleString())
  .addField('Afficher séparément :  ', role.hoist ? 'Oui': 'Non', true)
  .addField('Mentionnable :  ', role.mentionable ? 'Oui' : 'Non', true)
  .setFooter(`ID : ${role.id}`)
  .setTimestamp()
  .setColor(role.hexColor)

  message.channel.send(roleembed)
}

module.exports.help = {
    name: "role"
}