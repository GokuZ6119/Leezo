const Discord = require('discord.js')
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
    const logs = quick.get(`guild_${message.guild.id}_logs`) || null
    const SelectLogsChannel = message.guild.channels.cache.find(channel => channel.id === logs[0]) || message.guild.channels.cache.find(channel => channel.name === logs[0])
    const userId = args[0]
    const reason = args.slice(1).join(" ")  

            const embedPermBot = new Discord.MessageEmbed()
            .setColor("#FFF000")
            .setDescription("Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[BAN_MEMBERS]**")
            if (!message.member.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(embedPermBot);
  
            const embedPerm = new Discord.MessageEmbed()
            .setColor("#FFF000")
            .setDescription("Vous n'avez pas la permission d'utiliser cette commande ! **[BAN_MEMBERS]**")
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embedPerm)
  
            const embedMembre = new Discord.MessageEmbed()
            .setColor("#FFF000")
            .setDescription("Veuillez indiquer un ID à unban !")
            if (!userId) return message.channel.send(embedMembre)

            const embedNop = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setDescription("Veuillez fournir un ID valide avec des nombres !")
            if(isNaN(userId)) return message.channel.send(embedNop)

            const embedAucunBan = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setDescription("Aucun membre n'a été banni de ce serveur !")
            message.guild.fetchBans().then(async bans => {
                if(bans.size === 0) return message.channel.send(embedAucunBan)
                
                const bannedUser = bans.find(ban => ban.user.id == userId)

                const embedPasBanni = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setDescription("Ce membre n'est pas banni de ce serveur !")
                if(!bannedUser) return message.channel.send(embedPasBanni)
                await message.guild.members.unban(bannedUser.user, reason).catch(err =>{
                    const embedPb = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription("Il y'a quelque chose qui ne va pas !")
                    return message.channel.send(embedPb)
                }).then(() => {
                    const embedUnBan = new Discord.MessageEmbed()
                    .setColor("#FFF000")
                    .setDescription(` <@${userId}> a été unban avec succès`)          
                    message.channel.send(embedUnBan)
                })
            })
            SelectLogsChannel.send(new Discord.MessageEmbed()
            .setTitle(`<a:siren:822298907425112106> -[UNBAN] <@${userId}>`)
            .setColor("#FF0000")
            .addField('Utilisateur', `<@${userId}>`, true)
            .addField('Modérateur', message.author, true))
            
}
module.exports.help = {
    name: "unban",
};