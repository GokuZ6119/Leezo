const Discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.voice.channel) return message.reply('Veuillez rejoindre un salon vocal !')
    const music = args.join(" ")
    if(!music) return message.channel.send('Veuillez indiquer la musique à jouer !')
    Client.distube.play(message, music)
}

module.exports.help = {
    name: 'play',
};