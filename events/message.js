const client = require('../index')
const config = require('../config.json')
const Discord = require("discord.js")
const Timeout = new Discord.Collection();
const prefix = ("x")
let db = require("quick.db");


client.on('message', async message =>{
  if(message.content.includes(config.token)){message.delete}
  if(db.get(`${message.author.id}mute`) === `true`){return message.delete()}
  if(message.content.includes(config.token)) {message.delete()}
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
    
})
const Levels = require("discord-xp");
Levels.setURL('mongodb+srv://nsysean:seansean5@cluster0.srfir.mongodb.net/test');
client.on("message", async (message) => {
  if(message.content.includes(config.token)){message.delete}
    if (!message.guild) return;
    if (message.author.bot) return;
    
   const randomAmountOfXp = Math.floor(Math.random() * 1) + 3; // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
 
     
    }
    
    
    
  }); 
  