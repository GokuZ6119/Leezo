const Discord = require("discord.js")
const quick = require("quick.db")

module.exports.run = (client , message) => { 
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefixd
    if(message.author.bot) return;
    let args = message.content.slice(" ").trim().split(/ +/)
  let command = args.shift().toLowerCase();    
    const m = args.join(' ')
        if(!message.guild) return;
        if(!args.length) {return message.reply(`Tu t'es trompé dans la commande fait **${CustomPrefix}say** <ton texte>`)}
        message.delete()
        message.channel.send(m)
}
module.exports.help = {
    name: "say",
};
