const Discord = require('discord.js')
const quick = require('quick.db');

module.exports.run = async (client, message, args) => {
    message.delete()
  let time = Date.now();
      await message.channel.send("Pong !").then(async (m) => await m.edit(`Pong : ${Date.now() - time} ms`))
}
module.exports.help = {
    name: 'ping',
};