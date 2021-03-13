const Discord = require("discord.js")
let cant = new Discord.MessageEmbed()
.setTitle('Oh Really?')
.setDescription('You are not an Admin Bruh. Why you trying to use this command?')
.setTimestamp()
.setColor('#B85A21');

module.exports = {
    name: "warn",
  
    description: "warns a userr",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
			
    if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(cant)

    const member = message.mentions.users.first()
if(!member){message.reply("umm who to warn lolll")}
			const editJsonFile = require("edit-json-file");

// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`${__dirname}/warns.json`);

    file.append(member.id + "warns", { name: `\`warned by ${message.author.tag}\``, value: `\`\`\`reason: ${args.slice(1).join(" ")}\`\`\``, inline: true})

		file.save();

// Reload it from the disk
file = editJsonFile(`${__dirname}/warns.json`, {
    autosave: true
});
    let removed = new Discord.MessageEmbed()
    .setTitle(':white_check_mark: Warned Succesfully')
    .setDescription(`Warned **${member.tag}** for ${args.slice(1).join(" ")}.`)
    .setColor('GREEN')



 
    return message.channel.send(removed)
    
  
}}