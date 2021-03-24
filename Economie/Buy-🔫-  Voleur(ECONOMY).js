const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message, args) => {
const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === '🔫-  Voleur')
        if(!role) {
            try {

                let voleurrole = await message.guild.roles.create({
                    data : {
                        name : '🔫-  Voleur',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(voleurrole, {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true
                    })
                })

                message.channel.send('Le rôle 🔫-  Voleur vous à bien été ajouté')
                message.member.add(voleurrole)
                            } catch (error) {
                console.log(error)
            }
            let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === '🔫-  Voleur')
        if(message.member.roles.cache.has(role2)) return message.reply(`Vous avez déjà le rôle 🔫-  Voleur.`)
        await message.member.roles.add(role2)
};
        }

module.exports.help = {
    name: "buy-voleur",
};