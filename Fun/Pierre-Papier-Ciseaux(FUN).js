const Discord = require("discord.js");
const quick = require('quick.db');

module.exports.run = (client, message, args) => {
    let authorAttack = args[0];
    if(authorAttack === "pierre" || authorAttack === "feuille" || authorAttack === "ciseaux") {
        const attacks = ["pierre", "feuille", "ciseaux"];
        const randomNumber = Math.floor(Math.random() * attacks.length);
        let attack = attacks[randomNumber];

        let text = `**${message.author.username}**, vous avez choisi **${authorAttack}**. J'ai choisi **${attack}**.`;
       
        authorAttack = authorAttack.charAt(0);
        attack = attack.charAt(0);

        switch (authorAttack + attack) {
            case "pc":
            case "fp":
            case "cf":
                text += "\nVous avez gagné!";
                break;
            case "cp":
            case "pf":
            case "fc":
                text += "\nVous avez perdu :(";
                break;
            case "pp":
            case "ff":
            case "cc":
                text += "\nC'est une égalité!";
                break;
        }
		const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        	.setDescription(text)
       		.setColor("#FFF000")
            .setTimestamp()
        
        return message.channel.send(embed);
    } else {
        return message.channel.send('⚠️ Vous devez préciser l\'une des possibilités suivantes: `pierre`, `feuille`, `ciseaux`.');
    }
}

module.exports.help = {
    name: "pfc",
};