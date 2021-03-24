const Discord = require('discord.js');
const quick = require('quick.db');
const moment = require('moment');
const ms = require("ms");
const fs = require("fs");
const first = require('discord.js');
const MessageEmbed = require('discord.js');

module.exports.run = (client, message, args) => {
const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix

    if(message.channel.type === 'dm') return;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Permissions manquantes : `MANAGE_CHANNELS`.');
    args.shift();
    let slowduration = parseInt(args[0]);
    if (!args[0]) return message.channel.send("Veuillez rentrer la durée du slowmode");
    const embed = new Discord.MessageEmbed()
        .setTitle('Voulez vous vraiment changer le slowmode ?')
        .setDescription(`En faisant cette commande, ce salon va être changer à ${slowduration}.`)
        .addField('Confirmez par oui', `**Annulez par non**`)
        .setFooter(`Commande éxecutée par ${message.author.tag}`)
        .setColor('#FFF000')
        message.channel.send(embed).then(async msg => {
            const filter = m => m.author.id === message.author.id;

            msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    if (collected.first().content.toLowerCase() === 'oui') {
                        msg.channel.setRateLimitPerUser(slowduration).then(c => c.send(`***Le mode lent a été changé à ${slowduration} secondes***`))
                    } else {
                        msg.channel.send("Annulé.")
                    }
                })
        })
}
module.exports.help = {
    name: 'slowmode',
};