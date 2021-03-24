const Discord = require('discord.js');
const quick = require('quick.db')

module.exports.run = (client, message, args) => {
  const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
           if(message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }
      message.guild.fetchInvites()
      .then

      (invites =>
          {
              const userInvites = invites.array().filter(o => o.inviter.id === user.id);
              var userInviteCount = 0;
              for(var i=0; i < userInvites.length; i++)
          {
               var invite = userInvites[i];
             userInviteCount += invite['uses'];
          }
        message.channel.send(`${user.username} a ${userInviteCount} invitation(s).`);
    })
}
module.exports.help = {
  name: "invites",
};
