const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true	
})
module.exports = client;



const prefix = ("x")
const token = require("./config.json").token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

	
client.login(token)
var data = "pages/people.json"


const { readdirSync } = require("fs")
let categories = [];

const dirt = ("./commands/");


const command = client.commands
command.forEach(command => {
	categories.push({
		cmd: command.name,
		alias: command.aliases || ("No aliases"),
		des: command.description || ("No description"),
		category: command.category
	})
})
console.log(`Done updating✅`)

	fs.writeFile(data, JSON.stringify(categories), err => {
		if (err) throw err;
		// Checking for errors 
	})

		