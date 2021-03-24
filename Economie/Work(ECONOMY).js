const Discord = require('discord.js');
const quick = require('quick.db');
const ms = require('parse-ms');

module.exports.run = async (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
        let user = message.author;
        let timeout = 600000;
        let author = await quick.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Vous pourrez retraivaillé dans ${time.minutes}m ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 400) + 1200;
            quick.add(`money_${message.guild.id}_${user.id}`, amount)
            quick.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, Vous avez gagné ${amount}💰`)
        }
    }
 module.exports.help = {
     name: "work",
 };