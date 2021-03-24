const Discord = require('discord.js')
const quick = require('quick.db')

module.exports.run = (client, message, args) => { 
  const logs = quick.get(`guild_${message.guild.id}_logs`) || null
  const SelectLogsChannel = message.guild.channels.cache.find(channel => channel.id === logs[0]) || message.guild.channels.cache.find(channel => channel.name === logs[0])
          const member = message.guild.members.cache.get(args[1]) || message.mentions.members.first();
          const reason = args.slice(1).join(" ")

          const embedPermBot = new Discord.MessageEmbed()
          .setColor("#FFF000")
          .setDescription("Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[BAN_MEMBERS]**")
          if (!message.member.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(embedPermBot);

          const embedPerm = new Discord.MessageEmbed()
          .setColor("#FFF000")
          .setDescription("Vous n'avez pas la permission d'utiliser cette commande ! **[BAN_MEMBERS]**")
          if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embedPerm)

          const embedMembre = new Discord.MessageEmbed()
          .setColor("#FFF000")
          .setDescription("Tu dois mentionner un membre à ban")
          if (!member) return message.channel.send(embedMembre)

          const embedBan = new Discord.MessageEmbed()
          .setColor("#FFF000")
          .setDescription(` ${member} a été banni avec succès`)          
          message.guild.member(member).ban(member)
          message.channel.send(embedBan)
          
          SelectLogsChannel.send(new Discord.MessageEmbed()
            .setTitle(`<a:siren:822298907425112106> -[BAN] ${member.user.tag}`)
            .setColor("#FF0000")
            .addField('Utilisateur', member, true)
            .addField('Modérateur', message.author, true)
            .addField('Durée', '∞', true)
            .addField('Raison', `${reason}`, true))
}
module.exports.help = {
  name: "ban",
};