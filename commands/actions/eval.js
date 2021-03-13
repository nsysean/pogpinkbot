const { inspect } = require('util');

const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'eval',
    aliases: ['pogchum', 'e'],
    category : 'Owner cmds',
    description : `eval cmd that works pogchum`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      
      let owners = ["592715340782239754", "603448257653374976", "795506449517772801", "741440152110497884", "606279329844035594"];
      if (!owners.includes(message.author.id)) {
              return message.channel.send("you cant use this nerdd")
          }
         
        if(!args.length){
          return message.channel.send("args sir")
        }
        
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      const embed = new Discord.MessageEmbed()
      .setTitle(`Eval cmd`)
      
      .setDescription(`Input:\n\`\`\`js
${args.join(' ')}\`\`\`\nOutput:\n\`\`\`${inspect(evaled)}\`\`\``)
      message.channel.send(embed);
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      const embed = new Discord.MessageEmbed()
      .setTitle(`Failed:`)
      
      .setDescription(`Error:\n\`\`\`${error}\`\`\``)
      message.channel.send(embed)
    }
        
		}}
