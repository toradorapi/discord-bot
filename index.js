const { ShardingManager } = require('discord.js');
const Manager = new ShardingManager('./bot.js');
Manager.spawn(1);