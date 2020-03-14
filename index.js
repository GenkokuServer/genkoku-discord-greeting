require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    const user = member.user;
    if (user.bot) {
        console.log(`${user.tag}(BOT) joined the guild (ignored)`);
        return;
    }
    const channel = member.guild.channels.cache.find(channel => channel.id === process.env.CHANNEL);
    if (!channel) {
        console.log(`Channel(${process.env.CHANNEL}) not found`);
        return;
    }
    console.log(`${user.tag} joined the guild`)
    channel.send(`幻黒サーバ Discordへようこそ、<@${user.id}>さん！\n あなたのMinecraft IDをこのチャンネルへ書いてください！`);
});

client.login(process.env.TOKEN);