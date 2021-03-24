const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefixd
    const suggestion = quick.get(`guild_${message.guild.id}_suggestion`) || null
 
    const SelectSuggestionChannel = message.guild.channels.cache.find(channel => channel.id === suggestion[0]) || message.guild.channels.cache.find(channel => channel.name === suggestion[0])
    if(suggestion, false) return message.channel.send("Aucun salon de suggestion")
    if (!SelectSuggestionChannel) {
        return message.channel.send(`Aucun salon de suggestion configuré. Faite ${CustomPrefix}config pour plus d'infos `)
    } else {
        if(SelectSuggestionChannel.type === "text") { 
            if(message.author.bot) return;
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ");
    if(!args[0]) return message.channel.send("  Votre syntaxe est incorrecte. \n```Syntaxe : *suggestion <Description>```")
    var suggest = new Discord.MessageEmbed()
        .setDescription("📥 | Nouvelle suggestion !")
        .addField(" __Auteur :__", "<@" + message.author.id + ">")
        .addField(" __Description :__", thingToEcho, true)
        .setThumbnail(`https://cdn.discordapp.com/attachments/768848090354155550/771408444666150932/0316949ecb6cbce1dfc41c3ff9b85017.png`)
    	.setTimestamp()
		.setFooter(`Suggestion proposé par ${message.author.tag}.`)
        .setColor("#FFFF00")
    SelectSuggestionChannel.send(suggest)
    .then(function (message){
        message.react("✅")
        message.react("➖")
        message.react("❌")
    }).catch(function(){

    });
    message.delete();
    message.channel.send(`Votre suggestion à bien été envoyée dans ${SelectSuggestionChannel}`)
}
}
}
module.exports.help = {
    name: "suggestion",
};