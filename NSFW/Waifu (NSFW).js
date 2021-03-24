const Discord = require('discord.js');
const quick = require('quick.db');
const superagent = require('superagent')

module.exports.run = async(client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
  
  if(message.content.split(" ")[0] == CustomPrefix + 'waifu'){ 
     message.delete()
    if (!message.channel.nsfw) {message.channel.send("🔞 Veuillez aller dans un salon **NSFW** 🔞"); return;}
    const embed = new Discord.MessageEmbed();
    const { body } = await superagent.get("https://waifu.pics/api/nsfw/waifu")
    if(message.mentions.users.first() && message.mentions.users.first().id != message.author.id) {
    embed.setColor("#FFFF00")
    embed.setTitle(`${message.author.username} envoi une photo coquine à ${message.mentions.users.first().username} 🔞`)
    embed.setImage(body.url); } else {
    embed.setColor("#FFFF00")
    embed.setTitle(`$${message.author.username} | ***Leezo***  t'envoi une photo coquine 🔞`)
    embed.setImage(body.url);}
    message.channel.send(embed)}}
module.exports.help = {
    name: "waifu",
};