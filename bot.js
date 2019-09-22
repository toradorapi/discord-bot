const { token } = require("./token.json");
const { Client, RichEmbed } = require("discord.js");
const client = new Client({
    disableEveryone: true
});
const axios = require("axios");

client.on("ready", () => {
    client.user.setActivity
    let status = 0;
    console.log("Bot has started...")
    setInterval(function() {
        if(status === 0) {
            client.user.setActivity("t!help", { type: 'LISTENING' });
            status = 1;
        } else if(status === 1) {
            client.user.setActivity("over " + client.guilds.size + " servers", { type: 'WATCHING' });
            status = 2;
        } else if(status === 2) {
            client.user.setActivity("over " + client.users.size + " users", { type: 'WATCHING' });
            status = 3;
        } else if(status === 3) {
            client.user.setActivity("over 100 images", { type: 'WATCHING' });
            status = 4;
        } else if(status === 4) {
            client.user.setActivity("Toradora!", { type: 'WATCHING' });
            status = 5;
        } else if(status === 5) {
            client.user.setActivity("Toradora! Portable", { type: 'PLAYING' });
            status = 6;
        } else if(status === 6) {
            client.user.setActivity("Silky Heart", { type: 'LISTENING' });
            status = 0;
        } else {
            status = 0;
        }
    }, 15000)
});

client.on("message", async message => {
    if(message.author.bot) return;
    const args = message.content.split(" ");
    const command = args[0];

    if(command === "t!help") {
        let embed = new RichEmbed()
        .setColor("#E91E63")
        .setTitle("Taiga Bot - Help")
        .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
        .addField("t!original <char>", "Get an anime screenshot of your character.")
        .addField("t!fanart <char>", "Get an anime screenshot of your character.");
        message.channel.send(embed);
    } else if(command === "t!original") {
        if(args.length === 2) {
            axios.get("http://crugg.de:90/api/v1/img_original/" + args[1].toLowerCase())
            .then(function (response) {
                if(response.data.status === "error") {
                    let embed = new RichEmbed()
                    .setColor("#E91E63")
                    .setTitle("Taiga Bot - Error")
                    .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                    .setDescription(`An error with code ${response.data.code} occured` + "\n```" + response.data.message + "```\nIf you believe this is an error with the code, contact CRUGG#0001");
                    message.channel.send(embed);
                } else {
                    let embed = new RichEmbed()
                    .setColor("#E91E63")
                    .setTitle("Taiga Bot - Image")
                    .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                    .setImage(response.data.url)
                    .setDescription("Source: " + response.data.source);
                    message.channel.send(embed);
                }
            })
            .catch(function (error) {
                let embed = new RichEmbed()
                .setColor("#E91E63")
                .setTitle("Taiga Bot - Error")
                .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                .setDescription(`An error occured` + "\n```" + error + "```\nIf you believe this is an error with the code, contact CRUGG#0001");
                message.channel.send(embed);
            });
        } else {
            let embed = new RichEmbed()
            .setColor("#E91E63")
            .setTitle("Taiga Bot - Syntax Error")
            .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
            .setDescription("Please use t!original <chararacter>");
            message.channel.send(embed);
        }
    } else if(command === "t!fanart") {
        if(args.length === 2) {
            axios.get("http://crugg.de:90/api/v1/img_fanart/" + args[1].toLowerCase())
            .then(function (response) {
                if(response.data.status === "error") {
                    let embed = new RichEmbed()
                    .setColor("#E91E63")
                    .setTitle("Taiga Bot - Error")
                    .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                    .setDescription(`An error with code ${response.data.code} occured` + "\n```" + response.data.message + "```\nIf you believe this is an error with the code, contact CRUGG#0001");
                    message.channel.send(embed);
                } else {
                    let embed = new RichEmbed()
                    .setColor("#E91E63")
                    .setTitle("Taiga Bot - Image")
                    .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                    .setImage(response.data.url)
                    .setDescription("Source: " + response.data.source);
                    message.channel.send(embed);
                }
            })
            .catch(function (error) {
                let embed = new RichEmbed()
                .setColor("#E91E63")
                .setTitle("Taiga Bot - Error")
                .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
                .setDescription(`An error occured` + "\n```" + error + "```\nIf you believe this is an error with the code, contact CRUGG#0001");
                message.channel.send(embed);
            });
        } else {
            let embed = new RichEmbed()
            .setColor("#E91E63")
            .setTitle("Taiga Bot - Syntax Error")
            .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
            .setDescription("Please use t!fanart <chararacter>");
            message.channel.send(embed);
        }
    } else if(command === "t!invite") {
        let embed = new RichEmbed()
        .setColor("#E91E63")
        .setTitle("Taiga Bot - Invite")
        .setFooter("Taiga Bot developed by CRUGG#0001 ● Powered by https://crugg.de/toradorapi ● Command requested by " + message.author.tag)
        .setDescription("Click [here](https://discordapp.com/api/oauth2/authorize?client_id=585446552483659797&permissions=379968&scope=bot) to invite the bot.");
        message.channel.send(embed);
    }
});

client.login(token);
