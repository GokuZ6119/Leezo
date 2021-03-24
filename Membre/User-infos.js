const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = async (client, message) => {
        
        if(message.mentions.users.first()) { user = message.mentions.users.first();
    } else{ user = message.author;}

        const member = message.guild.member(user);
    	const role = member.roles.cache;

        const embed = new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL()) 
        .setColor("#FFFF00")
        .setTitle(`Information sur ${user.username}#${user.discriminator} :`)
        .addField('ID du compte:', `${user.id}`, true)
        .addField('Pseudo sur le serveur :', `${member.nickname ? member.nickname : user.username}`, true)
        .addField('A crée son compte le :', new Date(user.createdTimestamp).toLocaleDateString(), true)
        .addField('A rejoint le serveur le :', message.member.joinedAt.toLocaleString(), true)
        .addField('Status:', `${user.presence.status}`, true)
        .addField('Roles :', `${role.size}`, true)
    message.channel.send(embed)
    }

module.exports.help = {
    name: 'user',
};