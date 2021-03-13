const canvacord = require("canvacord")
const Discord = require("discord.js")
module.exports = {
    name : 'trigger',
    
    category : 'Functions',
    description : `triggerpfp`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      let mentioned = message.mentions.users.first()
			if(!mentioned){let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);}
let avatar = mentioned.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
		}}