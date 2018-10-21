const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const token = process.env.token // a garder en version heroku
const prefix = ("?");






bot.login(token);
