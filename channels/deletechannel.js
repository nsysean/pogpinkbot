
const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'deletechannel',
 
    category : 'Functions',
    description : `deletechannel <channel name>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.reply("Sorry you don't have permissions to manage channels!")}
        let role = message.guild.channels.cache.find(r => r.name === args.join(" "))
        role.delete()
    }
}