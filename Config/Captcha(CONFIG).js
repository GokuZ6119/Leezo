const Discord = require("discord.js")
const quick = require('quick.db')

module.exports.run = async(client, message, args) => {
        if(args[0] === 'on') {
            await quick.set(`captcha-${message.guild.id}`, true)
            const embed = new Discord.MessageEmbed()
            .setDescription("Système de captcha activé !")
            message.channel.send(embed)
        } else if(args[0] === 'off') {
            await quick.delete(`captcha-${message.guild.id}`)
            const embed = new Discord.MessageEmbed()
            .setDescription("Système de captcha désactivé !")
            message.channel.send(embed)
    }
}
module.exports.help = {
    name: "captcha",
};