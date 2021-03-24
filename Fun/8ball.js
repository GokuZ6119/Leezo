const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
  message.delete()
  const m = args.join(' ')
let reponse = ["Non." , "Oui." , "Pas pour aujourd'hui" , "J'ai regardé sur googlemais j'ai rien trouvé" , "Je m'en fous." , "Mdr" , "Sûrement pas !" , "J'ai faim !", "Et ?", "C'est faux !", "C'est vrai !"]

if(message.author.bot) return;
    if(!message.guild) return;
    if(!args.length) {return message.reply('Veuillez indiquer une question')}
const embed8ball = new Discord.MessageEmbed()
.setTitle('8ball')
.setColor('#FF0000')
.setDescription(`
**__Question : __**
${m}
**__Réponse :__**
${reponse[Math.floor(Math.random() * reponse.length)]}`)
message.channel.send(embed8ball)
}
module.exports.help = {
    name: "8ball",
};