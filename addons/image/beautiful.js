const canvacord = require("canvacord")
const Discord = require("discord.js")
module.exports = {
    name : 'beautiful',

    category : 'Functions',
    description : `oooh beautiful`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      let mentioned = message.mentions.users.first()
			if(!mentioned){let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.beautiful(avatar);
        let attachment = new Discord.MessageAttachment(image, "beautiful.gif");
        return message.channel.send(attachment);}
let avatar = mentioned.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.beautiful(avatar);
        let attachment = new Discord.MessageAttachment(image, "beautiful.gif");
        return message.channel.send(attachment);
		}}