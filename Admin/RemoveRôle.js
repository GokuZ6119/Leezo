const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
  
  const target = message.mentions.users.first() || message.author
  const role = message.mentions.roles.last()

  if(message.member.hasPermission(["MANAGE_ROLES"])) {
    message.delete()

    const embedPermBot = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[MANAGE_ROLES]** ")
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(embedPermBot);

    const embedMembre = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Veuillez mentionner le membre à qui je dois retirer le rôle !")
    if(!target) return message.channel.send(embedMembre)

    const member = message.guild.members.resolve(target)

    const embedRôle = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Veuillez mentionner le rôle que je dois retirer !")
    if(!role) return message.channel.send(embedRôle)

    member.roles.remove(role)

    const embedADD = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription(`Le rôle ${role.name} a été rétiré à  ${target}`)
    message.channel.send(embedADD)

  }else {

    const embedPerm = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Vous n'avez pas la permission d'utilisé cette commande ! **[MANAGE_ROLES]**")
    message.channel.send(embedPerm)
  }
}
module.exports.help = {
  name: "removerole",
};