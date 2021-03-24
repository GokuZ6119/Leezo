const Discord = require('discord.js')
const quick = require('quick.db')
module.exports.run = async(client, message, args) => {
    /**
     * @param {Message} message
     */

        const embedPerm = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setDescription("Vous n'avez pas la permission d'effectuer cette commande ! **[MANAGE_MESSAGES]**")
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPerm)

        const embedPermBot = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setDescription("Je n'ai pas les permissions nécessaires pour effectuer cette commande ! **[MANAGE_MESSAGES]**")
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedPermBot);

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
        const embedMembre = new Discord.MessageEmbed()
        .setColor("#FFF000")
        .setDescription("Veuillez mentionner un membre !")
        if(!Member) return message.channel.send(embedMembre)

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')
        if(!role) {
            try {
             const embedRôle = new Discord.MessageEmbed()
             .setColor("#FFF000")
             .setDescription("Le rôle mute est introuvable, tentative de création d'un rôle mute !")
             message.channel.send(embedRôle)

             let muterole = await message.guild.roles.create({
                 data : {
                     name : 'Muted',
                     permissions: []
                 }
             });
             message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                 await channel.createOverwrite(muterole, {
                     SEND_MESSAGES: false,
                     ADD_REACTIONS: false
                 })
             });
             const embedRôleCrée = new Discord.MessageEmbed()
             .setColor("#FFF000")
             .setDescription("Le rôle Mute à bien était crée !")
             message.channel.send(embedRôleCrée)

         } catch (error) {
             console.log(error)
         }
     };
     let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'Muted')

     const embedMuted = new Discord.MessageEmbed()
     .setColor("#FFF000")
     .setDescription(`${Member.displayName} est déjà mute.`)
     if(Member.roles.cache.has(role2.id)) return message.channel.send(embedMuted)

     await Member.roles.add(role2)

     const embedMute = new Discord.MessageEmbed()
     .setColor("#FFF000")
     .setDescription(`${Member.displayName} est maintenant mute.`)
     message.channel.send(embedMute)
}
module.exports.help = {
    name: "mute"
}