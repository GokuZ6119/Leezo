const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
        let money = quick.all().filter(data => data.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("#FFF000")
                .setFooter("Rien à voir encore ici !")
            return message.channel.send(noEmbed)
        };
    
        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[2]) ? client.users.cache.get(money[i].ID.split('_')[2]).tag : "Unknown User#0000"}** - ${money[i].data} :moneybag:\n`;        };
    
        const embed = new Discord.MessageEmbed()
            .setTitle(`Classement du ${message.guild.name}`)
            .setColor("#FFF000")
            .setDescription(finalLb)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
    name: "lbmoney",
}; 