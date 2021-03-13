const Discord = require("discord.js")
let cant = new Discord.MessageEmbed()
.setTitle('Oh Really?')
.setDescription('You are not an Admin Bruh. Why you trying to use this command?')
.setTimestamp()
.setColor('#B85A21');

module.exports = {
    name: "warnings",
  
    description: "view warnings of a user",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args, err) => {
			
  

    const member = message.mentions.users.first() || message.author
const e = member.id + message.guild.id + 'warns'

const editJsonFile = require("edit-json-file");

// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`../actions/warns.json`);
    let embed = new Discord.MessageEmbed()
    .setTitle(`**${member.tag}** Warns`)
    .addFields(file.get(e) || ("No warnings"))
    .setColor('GREEN')



 
     message.channel.send(embed)
		console.log(file.get(e))
 if(err) throw err;

}}