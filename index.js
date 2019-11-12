const Discord = require("discord.js");
const client = new Discord.client();
const token = require(./settings.json).token;

client.on("ready", () => {
  console.log("I'm Online");
});
