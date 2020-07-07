const Discord = require("discord.js");
const clientBot = new Discord.Client();

const token = "NzI5ODUyMjkzNDk0ODY1OTgx.XwO99g.SQrEqD3snDn5MD1zNSOB0gysWus";

clientBot.on('ready', () => {
    console.log("bot is online");
});


clientBot.on("message", msg => {
    if(msg.content == "Hello"){
        msg.reply("Hello Friend");
    }
})




clientBot.login(token);