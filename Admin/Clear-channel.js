const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix 
const logs = quick.get(`guild_${message.guild.id}_logs`) || null
const SelectLogsChannel = message.guild.channels.cache.find(channel => channel.id === logs[0]) || message.guild.channels.cache.find(channel => channel.name === logs[0])
const Salon = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
message.delete()

const embedSalon = new Discord.MessageEmbed()
.setColor("#FFF000")
.setDescription("<a:Neutre:822236123296170025> -Veuillez mentionné un salon !")
if(!Salon) return message.channel.send(embedSalon)

const embedPerm = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription("<a:contre:822236130325954601> Vous n'avez pas la permission d'effectuer cette commande ! **[MANAGE_MESSAGES]**")
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPerm)

const embedPermBot = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription("<a:contre:822236130325954601> Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[MANAGE_MESSAGES]**")
if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPermBot);

const embed = new Discord.MessageEmbed()
    .setDescription(`Voulez-vous vraiment supprimer tout les messages de` + `${Salon}\n En faisant cette commande, ce salon sera supprimé et dupliqué.`)
    .addField('<a:valid_yes:822236106920689724> Confirmez par oui', `<a:contre:822236130325954601> Annulez par non`)
    .setFooter(`Commande éxécutée par ${message.author.tag}`)
    .setColor('#FFF000')
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setAuthor("Leezo", client.user.displayAvatarURL())
    message.channel.send(embed).then(async msg => {
        const filter = m => m.author.id === message.author.id;
  
    msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content.toLowerCase() === 'oui') {
                const embedValidé = new Discord.MessageEmbed()
                .setColor("#479F23")
                .setDescription("<a:pour:822236106920689724> -Le salon a bien été cloné et supprimé !")
                message.channel.send(embedValidé)

                    Salon.clone().then(Salon.delete())

                    SelectLogsChannel.send(new Discord.MessageEmbed()
                    .setTitle(`<a:pour:822236106920689724> -[CONFIRMATION DE CLEAR-CHANNEL] ${Salon.name}`)
                    .setColor("#479F23")
                    .addField('Modérateur', message.author, true)
                    .addField('Salon', `${Salon.name}`, true))      
                    
                }
            
            if (collected.first().content.toLowerCase() === 'non') {
                const embedAnnulé = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription("<a:contre:822236130325954601> -Annulé !")
                    message.channel.send(embedAnnulé)
                SelectLogsChannel.send(new Discord.MessageEmbed()
                .setTitle(`<a:contre:822236130325954601> -[ANNULATION DE CLEAR-CHANNEL] ${Salon.name}`)
                .setColor("#FF0000")
                .addField('Modérateur', message.author, true)
                .addField('Salon', `${Salon.name}`, true))
            }
        })
    })
    SelectLogsChannel.send(new Discord.MessageEmbed()
            .setTitle(`<a:Neutre:822236123296170025> -[DEMANDE DE CLEAR-CHANNEL] ${Salon.name}`)
            .setColor("#FF9200")
            .addField('Modérateur', message.author, true)
            .addField('Salon', `${Salon.name}`, true))
}
module.exports.help = {
    name: 'clear-channel',
};