const Discord = require('discord.js');
const quick = require('quick.db');
const MessageEmbed = require('discord.js');

module.exports.run = (client, message) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
  const logs = quick.get(`guild_${message.guild.id}_logs`) || null
  const SelectLogsChannel = message.guild.channels.cache.find(channel => channel.id === logs[0]) || message.guild.channels.cache.find(channel => channel.name === logs[0])

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if (!message.member.hasPermission("MANAGE_ROLES")) return (message.channel.send(new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription("<a:contre:822236130325954601>  -Vous n'avez pas la permission d'utilisé cette commande ! **[MANAGE_ROLES]** !")))
  
  if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription("<a:contre:822236130325954601>  -Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[MANAGE_ROLES]** "))

  const role = message.mentions.roles.first();
  const args = message.content.split(' ');
  args.shift();
  const mentionned = message.mentions.members.first();

  message.delete()
  
  if (!mentionned) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#FF9200")
  .setDescription(`<a:Neutre:822236123296170025> -Veuillez mentionner le membre à qui je dois ajouter le rôle !`));

  if (!role) return message.channel.send(new Discord.MessageEmbed()
      .setColor('#FF9200')
      .setDescription(`<a:Neutre:822236123296170025> -Veuillez mentionner le rôle que je dois ajouter au membre !`));
  
  if (mentionned.roles.cache.has(role.id)) return message.reply(new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`<a:contre:822236130325954601>  -${mentionned} possèdes déja ce rôle.`));


  mentionned.roles.add(role).then(message.channel.send(new Discord.MessageEmbed()
      .setColor("#479F23")
      .setDescription(`<a:valid_yes:822236106920689724> -Le rôle ${role.name} a bien été ajouté a ${mentionned}.`)));
  
      SelectLogsChannel.send(new Discord.MessageEmbed()
      .setTitle(`<a:pour:822236106920689724> -[ADD-RÔLE] ${mentionned.user.tag}`)
      .setColor("#479F23")
      .addField('Membre', mentionned, true)
      .addField('Modérateur', message.author, true)
      .addField('Rôle', `<@&${role.id}>`, true))

}
module.exports.help = {
  name: "addrole",
};