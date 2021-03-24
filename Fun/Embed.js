const Discord = require('discord.js');
const quick = require('quick.db');

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
  const embedErreur = new Discord.MessageEmbed()
            .setColor("#FFF000")
            .setTimestamp()
            .setTitle(`❌| Vous n'avez pas indiquer de texte !`)
            .setDescription(`Usage: \`${CustomPrefix}embed <TITLE> ++ <DESCRIPTION>\``)
      if(!args[0])
        return message.channel.send(embedErreur)
    
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let desc = userargs.slice(1).join(" ")
      const embedValide = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setTimestamp()
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
      message.channel.send(embedValide)
}
module.exports.help = {
    name: "embed",
};
