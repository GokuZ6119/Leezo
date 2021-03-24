const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const argv = message.content.slice(" ").trim().split(/ +/)
    const cmd = argv.shift().toLowerCase()
    const args = argv.join(' ')
    const termux = console.log;
      message.delete()
        const roles = message.guild.roles.cache.sort((a, b) => b.position = a.position).map(role => role.toString()).slice(0, -1)
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        let rolesdisplay;
        if(roles.length < 20) {
            rolesdisplay = roles.join(' ')
        }
        const { guild } = message
        const { name, region, memberCount, owner } = guild
        const icon = guild.iconURL()
        var Serveurstats = new Discord.MessageEmbed()
        .setColor("#000cff")
        .setTitle(`Infos du serveur ${name}`)
        .setThumbnail(message.guild.iconURL())
        .addField(`**__Général__**`, [
            `**Nom : ** ${name}`,
            `**ID : ** ${message.guild.id}`,
            `**Région : ** Europe`,
           `**Fondateur : ** ${message.guild.owner.user.tag}`,
           `**Crée le : ** ${ new Date(guild.createdTimestamp).toLocaleDateString()}`,
           '\u200b' 
        ])
  
        .addField('**__Statistiques__**', [
            `**Nombre de rôles : ** ${roles.length}`,
            `**Nombre d'émojis : ** ${emojis.size}`,
            `**Membres : ** ${members.filter(member => !member.user.bot).size}`,
            `**Bots : ** ${members.filter(member => member.user.bot).size}`,
            `**Salons textuels : ** ${channels.filter(channel => channel.type === 'text').size}`,
            `**Salons vocaux : ** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**Rôles : ** ${roles.length}`,
            `\u200b`
        ])
        .setTimestamp()
        message.channel.send(Serveurstats)
    }
    module.exports.help = {
        name: 'serveur',
    };