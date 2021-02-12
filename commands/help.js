// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('Regardez vos mp!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fekt/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Aide - Website')
            .setURL('https://github.com/fekt/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`Le support et l'aide sont à disposition sur le site web\n[Page Web Aide](https://github.com/fekt/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [durée] [prix]`, 'La durée est un état dans un nombre et une variable de temps.Le prix peut être n importe quoi mais il doit être supérieur à un.')
            .addField('Example:', `${prefix}Giveaway 10h 9,99 € Nitro \n Crée un cadeau de 10 heures avec «9,99 € Nitro» comme prix.`)
            .setFooter('Fait avec 💖 avec discord.js', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fekt/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setURL('https://github.com/fekt/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/fekt/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'Duration is statet in a number and a time variable.\nPrize can be anything but it has to be above one.')
            .addField('Example:', `${prefix}giveaway 10h $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as prize.`)
            .setFooter('Made with 💖 and discord.js by fekt', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
