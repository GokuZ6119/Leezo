const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;

        let money = await quick.fetch(`money_${message.guild.id}_${user.id}`);
        if(money === 0) bal = 0;

        message.channel.send(`${user} vous avez ${money}💰`)
    }
module.exports.help = {
    name: "money",
};