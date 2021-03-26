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
            .setTitle('<:leezo:824714317190004828> ・Botinfo')
            .setColor('#FFF000')
            .addFields(
                {
                    name: '<a:infini:822967691689984051> ・Nom',
                    value: `**\`${client.user.username}\`**`,
                    inline: true
                },
                {
                    name: '<a:fleche:822966126999896064> ・Tag',
                    value: `**\`${client.user.tag}\`**`,
                    inline: true
                },
                {
                    name: '<a:load:822961685131427850> ・ID',
                    value: `**\`${client.user.id}\`**`,
                    inline: true
                },
                {
                    name: '\<:crateur:823824747250188288> ・Créateur',
                    value: `Le créateur de Leezo est <@518738416796696578j>`,
                    inline: true
                },
                {
                    name: '<:serveurr:824021757433348166>・Serveurs',
                    value: `Leezo est présent sur **\`${client.guilds.cache.size}\`** serveur(s).`,
                    inline: true
                },
                {
                    name: '<:salons:824715238016417872>・Salons',
                    value: `Il observe \`${client.channels.cache.size}\` salons.`,
                    inline: true
                },
                {
                    name: '<:membres:824715655706181662>・Membres',
                    value: `\`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\` membres utilisent Blazee`,
                    inline: true
                },
                {
                    name: '<:pong:823824698206846986>・Ping',
                    value: `\`${Math.round(client.ws.ping)}ms\``,
                    inline: true
                },
                {
                    name: '<:serveur:823824936921202738>・Informations du Serveur',
                    value: `Cores: \`${os.cpus().length}\``,
                    inline: true
                },
                {
                    name: '<:cible:823824826753089577>・Creé le',
                    value: `J'ai été crée le \`23 Février 2021\` à \`02h47\``,
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
                    name: '<:groupe:823824877035323404> ・Contributeurs',
                    value: `Les contributeurs de Leezo sont: \`๖̶ζ͜͡Mathéo#6978\` \n \`TetraLiaa#2674\``,
                    inline: true
                },
             // {
             //    name: '🔢・Nombres de commandes.',
             //    value: `\`${message.client.commands.size}\``,
             //    inline: true
             //} ,
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
                    name: '<a:certif:822967716000301076> ・Version de Leezo',
                    value: `Version **\`1.2.1\`**`,
                    inline: true
                },
                {
                    name: '<a:warn:822967840511361065> ・Support de Leezo',
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