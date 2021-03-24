const { MessageEmbed } = require('discord.js')
const os = require('os')
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}
module.exports.run = async(client, message, args) => {
        const uptime = (process.uptime() + "").toHHMMSS();
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('<:blazee:812100308339654676> ・Botinfo')
            .setColor('#FFF000')
            .addFields(
                {
                    name: '・Nom',
                    value: `**\`${client.user.username}\`**`,
                    inline: true
                },
                {
                    name: '・Tag',
                    value: `**\`${client.user.tag}\`**`,
                    inline: true
                },
                {
                    name: '・ID',
                    value: `**\`${client.user.id}\`**`,
                    inline: true
                },
                {
                    name: '\<:maen:815353131780145223> ・Créateur',
                    value: `Le créateur de Leezo est <@381462429361504266>`,
                    inline: true
                },
                {
                    name: '<:databasestorage:815368593352294451>・Serveurs',
                    value: `Leezo est présent sur **\`${client.guilds.cache.size}\`** serveur(s).`,
                    inline: true
                },
                {
                    name: '<:teammember:815359310619607101>・Salons',
                    value: `Il observe \`${client.channels.cache.size}\` salons.`,
                    inline: true
                },
                {
                    name: '<:community:815359146882629692>・Membres',
                    value: `\`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\` membres utilisent Blazee`,
                    inline: true
                },
                {
                    name: '<:pong:814904372751630387>・Ping',
                    value: `\`${Math.round(client.ws.ping)}ms\``,
                    inline: true
                },
                {
                    name: '<:servers:815367968279625748>・Informations du Serveur',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: '<:target:815353418700685333>・Creé le',
                    value: `J'ai été crée le 23 Février 2021 à 02h47`,
                    inline: true
                },
                {
                    name: '✨・Objectif',
                    value: `\`${client.guilds.cache.size}\`/50 serveurs`,
                    inline: true
                },
                {
                    name: '<a:load:823652635508342824>・Uptime',
                    value: `\`\`\`diff\n-${uptime}\`\`\``,
                    inline: true
                },
                {
                    name: '<:maen:815353131780145223> ・Contributeurs',
                    value: `Les contributeurs de Leezo sont: `,
                    inline: true
                },
                {
                     name: '🔢・Nombres de commandes.',
                     value: `\`${message.client.commands.size}\``,
                     inline: true
                } ,
                {
                    name: '🖥・Language',
                    value: `Leezo est coder en : \`JS\`.`,
                    inline: true
                },
                {
                    name: '💾・Mémoire',
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` MB`,
                    inline: true
                },
                {
                    name: '・Version de Leezo',
                    value: `Version **\`1.2.1\`**`,
                    inline: true
                },
                {
                    name: '・Support de Leezo',
                    value: `[Support !](https://discord.gg/GFcEdDCeSj)`,
                    inline: true
                },               
            )
            .setTimestamp()
            .setFooter(`Demandé par ${message.author.tag}`, message.author.displayAvatarURL())

        message.channel.send(embed)
}
module.exports.help = {
    name: 'bot',
};