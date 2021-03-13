
const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'deleterole',
 
    category : 'Functions',
    description : `deleterole <role name>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")){return message.reply("Sorry you don't have permissions to manage roles!")}
        let role = message.guild.roles.cache.find(r => r.name === args.join(" "))
        role.delete()
        message.reply("deleted that role!")
    }
}