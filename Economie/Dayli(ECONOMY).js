const Discord = require('discord.js');
const quick = require('quick.db');
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
	  let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let daily = await quick.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`🚫Vous avez déjà récupéré votre récompence aujourd'hui !🚫 Revenez à ${time.days}j, ${time.hours}h, ${time.minutes}m, ${time.seconds}s`)
        } else {
            quick.add(`money_${message.guild.id}_${user.id}`, amount);
            quick.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`Vos ${amount} 💰 ont bien été ajoutés à votre bank`)
      }
 }
module.exports.help = {
    name: "daily",
};