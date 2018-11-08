const Discord = require('discord.js');

var prefix = ("!");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Justr3kt-bot,!help"); 
    console.log("Je suis prêt à être utilisé.");
});
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "créateur"){
        msg.channel.send("Le créateur du bot est Wisemar")
        console.log("Une personne a demandé de savoir qui ezt le créateur .")
    }

});



bot.login("NTEwMTY4ODY2OTE2MTM5MDE5.DsZA7Q.BMJysrHyo07UI01KfV4bylUNFoE");
