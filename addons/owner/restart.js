
const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'restart',

    category : 'Owner cmds',
    description : `restarts the bot`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
       if (message.author.id !== "603448257653374976") {
    return message.channel.send(`You can't use this'`);
  }
  console.log(`Restarting..`)
    message.channel.send('Restarting...')
    
    .then(message => client.destroy())
    .then(() => client.login(""));
    message.channel.send('Restarted')
		}}
