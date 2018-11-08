const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Justr3kt-bot,!help"); 
    console.log("Je suis prêt à être utilisé.");
});

bot.login("NTEwMTY4ODY2OTE2MTM5MDE5.DsZA7Q.BMJysrHyo07UI01KfV4bylUNFoE");
