const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message) => {
      const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
      const logs = quick.get(`guild_${message.guild.id}_logs`) || null
      const SelectLogsChannel = message.guild.channels.cache.find(channel => channel.id === logs[0]) || message.guild.channels.cache.find(channel => channel.name === logs[0])
      const args = message.content.trim().split(/ +/g)
        message.delete()

  const embedPermBot = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription("<a:contre:822236130325954601> -Je n'ai pas la permission pour effectuer cette commande ! **[MANAGE_MESSAGES]**")
  if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPermBot);
  
        member = message.mentions.members.first()
        if(message.member.hasPermission('MANAGE_MESSAGES')){
    
            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
  
                    message.channel.bulkDelete(args[1])

                    const embedSup = new Discord.MessageEmbed()
                    .setColor("#479F23")
                    .setDescription(`<a:pour:822236106920689724> -Vous avez supprimé ${args[1]} message(s)`)
                    message.channel.send(embedSup)

                    message.channel.bulkDelete(1)

                    SelectLogsChannel.send(new Discord.MessageEmbed()
                    .setTitle(`<a:pour:822236106920689724> -[CLEAR]`)
                    .setColor("#479F23")
                    .addField('Modérateur', message.author, true)
                    .addField('Nombre de messages', `${args[1]}`, true)) 
  
                }
                else{
                    const embed1à99 = new Discord.MessageEmbed()
                    .setColor("#FF9200")
                    .setDescription("<a:Neutre:822236123296170025> -Vous devez indiqué une valeur entre 1 et 99 !")
                    message.channel.send(embed1à99)
                }
                }else{
                     const embedNb = new Discord.MessageEmbed()
                     .setColor("#FF9200")
                     .setDescription("<a:Neutre:822236123296170025> -Vous devez indiquer un nombre de message a supprimer !")
                     message.channel.send(embedNb)
            }
                }else{
                    const embedPerm = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription("<a:contre:822236130325954601> -Vous n'avez pas la permission d'utiliser cette commande **[MANAGE_MESSAGES]**")
                     message.channel.send(embedPerm)
        }
    }
module.exports.help = {
    name: "clear"
}