const Discord = require('discord.js');
const quick = require('quick.db');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = ('=');
const config = require('./config.json')
const fs = require('fs');
const Canvacord = require('canvacord')

client.commandes = new Discord.Collection();

fs.readdir("./Commandes/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Commandes/${f}`);
  console.log(`✔️  | ${f} (Divers) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Admin/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Admin/${f}`);
  console.log(`✔️  | ${f} (Admin) chargé!`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Config/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Config/${f}`);
  console.log(`✔️  | ${f} (Config) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Economie/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Economie/${f}`);
  console.log(`✔️  | ${f} (Économie) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Fun/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Fun/${f}`);
  console.log(`✔️  | ${f} (Fun) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Membre/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Membre/${f}`);
  console.log(`✔️  | ${f} (Membre) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Musique/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Musique/${f}`);
  console.log(`✔️  | ${f} (Musique) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./NSFW/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./NSFW/${f}`);
  console.log(`✔️  | ${f} (NSFW) chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

fs.readdir("./Raid/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){return;}
  jsfile.forEach((f, i) =>{
  let props = require(`./Raid/${f}`);
  console.log(`✔️  | ${f} (Raid) Chargé !`);
  client.commandes.set(props.help.name, props);
  });
});

client.on("ready", async () => {
    console.log(`${client.user.tag} Connecté`)
    const statuses = [
        () => `Support MP`,
        () => `${client.guilds.cache.size} serveurs`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`,
        () => `Prefix => @Leezo`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'WATCHING'})
        i = ++i % statuses.length
    }, 1e4)
});

client.on("message", async message => {
 const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
  if(message.content.includes('813887130421821480')) {
    const embed = new Discord.MessageEmbed()
    .setColor("#FFF000")
    .addField('Mon créateur est : ', [
        `<@518738416796696578>`,
        ])
    .addField('Ils m\'aide à me développer : ', [
        `<@381462429361504266>, <@319488082099306506>`,
    ])
    .addField('Mon prefix est :', [
        `**${CustomPrefix}**`,
    ])
    message.channel.send(embed)
  }
});

client.on("message" , async message => { 
      const anti = quick.get(`guild_${message.guild.id}_anti`) || null
      if(message.member.hasPermission("ADMINISTRATOR")) return;
      if(!anti) return;
  if(message.content.includes('https')) {
      message.delete()
      const embedLink = new Discord.MessageEmbed()
      .setColor("#FFF000")
      .setDescription("L'anti-lien est actvé sur ce serveur")
      message.author.send(embedLink)
  }
});

client.on("message", async message => { if(message.author.bot) return;  
    const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];let args = messageArray.slice(1);
  let commandfile = client.commandes.get(cmd.slice(CustomPrefix.length));
  if(commandfile && cmd.includes(CustomPrefix)){commandfile.run(client,message,args);}
  
});

client.on("messageReactionAdd", async(reaction, user) => {
            const message = reaction.message
            const member = message.guild.members.cache.get(user.id)
          
            if (user.partial) await user.fetch();
            if (reaction.partial) await reaction.fetch()
            if(user.bot) return;
          
            // Système Ticket \\ 
            if(["🎟️", "🔒"].includes(reaction.emoji.name)) { 
              switch(reaction.emoji.name) {
          
                case "🎟️":
                  reaction.users.remove(user);
          
                  let username = user.username;
                  let channel = await message.guild.channels.create(`ticket-${username}`, {type: 'text'})
          
                  channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false})
                  channel.updateOverwrite(member, {
                    'VIEW_CHANNEL': true,
                    'SEND_MESSAGES': true,
                    'ADD_REACRIONS': true
                  }).catch(err => { console.log(err)});
                  channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': true})
                  .catch(err => {
                    console.log(err)
                  });
                  message.delete()
                  let ticketInChannel = new Discord.MessageEmbed()
                  .setTitle('**__Nouveau ticket:__**')
                  .setDescription(`${member}, Vous avez ouvert un ticket. Communiquez nous votre problème/question`)
                  .setColor('#FFF000')
                  .setTimestamp()
                  .setFooter(`Développé par GokuZ#3305`)
                  channel.send(`Bonjour, @here`),
                  
                
                  channel.send(ticketInChannel).then(msg => msg.react('🔒'))
                break;
          
                case "🔒":
                  if(!message.channel.name.startsWith('ticket-')) return;
                  if(!member.hasPermission('ADMINISTRATOR')) return;
          
                  message.channel.delete()
                break;
              }
            }
});

client.on("message", async message => {
const CustomPrefix = quick.get(`guild_${message.guild.id}_prefix`) || prefix
if(message.content.startsWith(CustomPrefix + 'rank')) {
          xp(message)
    if(message.author.bot) return;
    var user = message.mentions.users.first() || message.author;
    var level = quick.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = quick.fetch(`guild_${message.guild.id}_XP_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 // 500 + 1000 + 1500
    const rankcard = new Canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(quick.fetch(`guild_${message.guild.id}_XP_${user.id}`) || 0)
        .setRequiredXP(xpNeeded)
        .setStatus(user.presence.status)
        .setLevel(quick.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
        .setRank(1, 'RANK', false)
        .setProgressBar("#FFF000", "COLOR")
        .setOverlay("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/814245716645773352/816814865678860308/fondcanva_2.jpg")
        rankcard.build()
        .then(data => {
            const atta = new Discord.MessageAttachment(data, "rank.png")
            message.channel.send(atta)
        })

    async function xp(message) {
        if(message.author.bot) return
        const randomNumber = Math.floor(Math.random() * 50) + 51;
        quick.add(`guild_${message.guild.id}_XP_${message.author.id}`, randomNumber) 
        quick.add(`guild_${message.guild.id}_XPTotal_${message.author.id}`, randomNumber)
        var level = quick.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
        var xp = quick.get(`guild_${message.guild.id}_XP_${message.author.id}`)
        var xpNeeded = level * 500;
        if(xpNeeded < xp){
            var newLevel = quick.add(`guild_${message.guild.id}_level_${message.author.id}`, 1) 
            quick.subtract(`guild_${message.guild.id}_XP_${message.author.id}`, xpNeeded)
            message.channel.send(`GG ${message.author}, tu passe au niveau ${newLevel}`)
    }
  }
}
});

client.on('guildCreate', guild => {
    client.guilds.cache.get('814234897404919838').channels.cache.get('823682093066092574').send(new Discord.MessageEmbed()
    .setTitle("*<a:pour:822236106920689724>  -Leezo à rejoins un serveur !*")
    .setDescription(`**Créateur** : **${guild.owner.user.tag}**`)
    .addField(`**Nom du serveur** : *${guild.name}*\n`, `\n**Nombre de membres** : **${guild.memberCount}** `)
    .setThumbnail(guild.iconURL())
    .setTimestamp()
    .setFooter(`Je suis dans maintenant dans ${client.guilds.cache.size} serveurs`)
    .setColor('#0bff00'))
})

client.on('guildDelete', guild => {
  client.guilds.cache.get('814234897404919838').channels.cache.get('823682384141484033').send(new Discord.MessageEmbed()
  .setTitle("*<a:contre:822236130325954601> -Leezo à été retiré d'un serveur !*")
  .setDescription(`**Créateur** : **${guild.owner.user.tag}**`)
  .addField('**Nom du serveur** :', `*${guild.name}*\n`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  .setFooter(`Je suis dans maintenant dans ${client.guilds.cache.size} serveurs`)
  .setColor('#FF0000'))
})

client.login(config.token)