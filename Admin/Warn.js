const Discord = require('discord.js');
const quick = require('quick.db');
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix

    const embedPerm = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Permissions manquantes !! **[MANAGE_MESSAGES]**")
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPerm)

    const user = message.mentions.members.first()

    const embedMembre = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription( `Veuillez mentionner un membre à warn ! **${CustomPrefix}warn** @user <reason>`)
    if(!user) return message.channel.send(embedMembre)

    const embedOwner = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Vous ne pouvez pas warn le propriétaire du serveur !")
    if(user.id === message.guild.ownerID) return message.channel.send(embedOwner)

    const embedRôle = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Vous ne pouvez pas warn ce membre !")
    if(message.member.roles.highest.comparePositionTo(user.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(embedRôle)

    const reason = args.slice(1).join(" ")

    const embedRaison = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription(`Veuillez indiquer une raison ! **${CustomPrefix}warn** @user <reason>`)
    if(!reason) return message.channel.send(embedRaison)

    const warnings = quick.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === 3) {
        const embedLimite = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setDescription("<a:siren:822298907425112106> -La limite de 3 warns à été atteinte !")
         return message.channel.send(embedLimite)
    }

    if(warnings === null) {
        quick.set(`warnings_${message.guild.id}_${user.id}`, 1)

        const embedWarnMP = new Discord.MessageEmbed()
        .setTitle(`<a:siren:822298907425112106> -Warn de ${user.user.tag}`, user.displayAvatar())
        .setDescription(`Attention ! Vous avez été warn sur le serveur **${message.guild.name}** pour ${reason}`)
        user.send(embedWarnMP)

        const embedWarn = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setDescription(`<a:siren:822298907425112106> -${user} a été warn pour ${reason} !`)
        await message.channel.send(embedWarn)
    }
    else if(warnings !== null) {
        quick.add(`warnings_${message.guild.id}_${user.id}`, 1)
        const embedWarnMP = new Discord.MessageEmbed()
        .setTitle(`<a:siren:822298907425112106> -Warn de ${user.user.tag}`, user.displayAvatar())
        .setColor("#FF0000")
        .setDescription(`Attention ! Vous avez été warn sur le serveur **${message.guild.name}**`)
        .addField('Raison', `${reason}`)
        user.send(embedWarnMP)

        const embedWarn = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<a:siren:822298907425112106> -${user} a été warn pour ${reason} !`)
        await message.channel.send(embedWarn)
    }
    
}
module.exports.help = {
    name: "warn",
};