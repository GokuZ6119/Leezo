const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Membre introuvable.')

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} est maintenant unmute !`)
    }
}

module.exports.help = {
    name: "unmute"
}
