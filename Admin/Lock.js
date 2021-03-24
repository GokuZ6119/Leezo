const Discord = require('discord.js');
const quick = require('quick.db');
const ms = require('ms')

module.exports.run = async (client, message, args) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
    const rolemembre = quick.get(`guild_${message.guild.id}_rolemembre`)|| null
    message.delete();

    const embedPerm = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Vous n'avez pas la permission d'effectuer cette commande ! ")
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(embedPerm)

    const embedChannel = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription("Veuillez spécifier le channel !")
    if (!message.mentions.channels.first()) return message.channel.send(embedChannel)

    let time = args[1] || "30s"

    let Channel = message.mentions.channels.first()

    try {
        await Channel.updateOverWrite(Channel.guild.roles === rolemembre, {
            SEND_MESSAGES: false
});

    const embedValidé = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .setDescription(`🔒 <#${Channel.id}> à bien était fermer`)
    message.channel.send(embedValidé)
    } catch (err) {
    console.log(err);
}

    setTimeout(() => {
    Channel.updateOverwrite(message.guild.id, {
    SEND_MESSAGES: false
}, ms(time))
})
}
module.exports.help = {
    name: 'lock',
};  