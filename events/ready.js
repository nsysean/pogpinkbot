const Discord = require ("discord.js")
const client = require('../index')
const config = require('../config.json')
const path = require("path")
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nsysean:seansean5@cluster0.srfir.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const prefix = ("x")
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

client.on('ready', () => {
    const status = [
        {
            name:  `${client.guilds.cache.size} servers`,
            type: "WATCHING"
        },
        {
            name: `to ${prefix}help`,
            type: "LISTENING"
        },
        {
          name: `${client.channels.cache.size} channels`,
          type: "WATCHING"
        }
    ]
    let i = 0
    setInterval(function(){
        const toDisplay = status[parseInt(i, 10)]
        client.user.setActivity(toDisplay, {type: status[parseInt(i, 10)].type});
        if(status[parseInt(i+1, 10)]) i++;
        else i = 0;
    }, 5000); // update every 5 seconds
    console.log(`${client.user.username} ✅`)

    const clientDetails = {
        guilds: client.guilds.cache.size,
        users: client.users.cache.size,
        channel: client.channels.cache.size
    }
   
 
const express = require("express")
    const app = express();
    const port = 2000;//should be 3000 || 3001; lol
    app.get("/", (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "..", "pages", "main.html"))
    })
    app.get("/info", (req, res) => {
        res.status(200).send(clientDetails)//app.status(200).send(clientDetails)
    })
    app.listen(port)
    db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!')
});
})
/*
var data = "../pages/profile.json"

const fs = require("fs");
const { readdirSync } = require("fs")



let categories = [];

const dirt = ("../commands")



// list all files in the directory

fs.readdir(dirt, (err, dir) => {
	if (err) {
		throw err;
	}


	dir.forEach(dir => {

		const commands = readdirSync(`../commands/${dir}/`).filter((file) =>
			file.endsWith(".js"))





		const cmds = commands.map((command) => {
			let file = require(`../commands/${dir}/${command}`);

			if (!file.name) return "No command name.";

			let name = file.name.replace(".js", "");

			if (!file.aliases) return "No aliases.";



			return `Description: ${file.description || ("No description")}`;
		});
			const cat = commands.map((command) => {
			let file = require(`../commands/${dir}/${command}`);

			if (!file.name) return "No command name.";

			let name = file.name.replace(".js", "");

			if (!file.aliases) return "No aliases.";



			return `Category: ${dir.toLowerCase()}`;
		});
			const alias = commands.map((command) => {
			let file = require(`../commands/${dir}/${command}`);

			if (!file.name) return "No command name.";

			let name = file.name.replace(".js", "");

			if (!file.aliases) return "No aliases.";



			return `Aliases: ${file.aliases || ("No aliases")}`;
		});
			const name = commands.map((command) => {
			let file = require(`../commands/${dir}/${command}`);

			if (!file.name) return "No command name.";

			let name = file.name.replace(".js", "");

			if (!file.aliases) return "No command name.";



			return `${name}`;
		});
		categories.push({
			cmd: `${name}`,
			alias: `${alias}`,
			des: `${cmds}`,
			category: `${cat}`

		})
		
	})
	console.log(`Done updating✅`)

	fs.writeFile(data, JSON.stringify(categories), err => {
		if (err) throw err;
		// Checking for errors 
	})
})



//search part lol

var data2 = require("../pages/profile.json")
let pog = data2.find(el => el.cmd === "test");
console.log(pog)*/