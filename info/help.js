const { MessageEmbed } = require("discord.js");
const { fs, readdir, readdirSync } = require("fs");
const prefix = ("x")

module.exports = {
  name: "help",
 aliases: ["h"],
  description: "Help command!",
  run: async (client, message, args) => {
    
var prefix = ("x")
if(!args[0]){

  let categories = [];
  const fs = require("fs")
const dirt = ("./commands/");
    // list all files in the directory
    
    fs.readdir(dirt, (err, dir) => {
        if (err) {
            throw err;
        }
    
        
        dir.forEach(dir => {
      

        categories.push({
          name: `${dir.toUpperCase()}`,
          value: `\`${prefix}help ${dir.toLowerCase()}\``,
          inline: true,
        });
        console.log(categories)
      });
      const embed = new MessageEmbed()
        .setTitle("📬 Need help? Here are all of my categories:")
       
       
        .addFields(categories)
        
     
        .setDescription(
          `Use \`${prefix}cmd\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
      return message.channel.send(embed);
   
})}else{
 


const commands = readdirSync(`./commands/${args.join(" ")}/`).filter((file) =>
file.endsWith(".js")
);
let command = []
commands.forEach(cmd => {
  let file = require(`../../commands/${args.join(" ")}/${cmd}`);
  command.push({
    name: `**\`${file.name}\`**`,
    value: `\`\`\`${file.description || ("No description")}\`\`\``,
    inline: true
  })


})
console.log(command)


const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setTitle(`${args.join(" ")} commands`)
.addFields(command)
message.channel.send(embed)}


    }}
  