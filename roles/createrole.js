const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'createrole',
 
    category : 'Functions',
    description : `createrole <role name> <hexcolor>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")){return message.reply("Sorry you don't have permissions to manage roles!")}


const pog = args.slice(1);
//if(!colors.includes(pog)){return message.channel.send("Please pick a color:" + colors)}
//if(pog = "blue"){var cool = "#0000ff"}if(pog = "red"){var cool = "#ff0000"}if(pog = "yellow"){var cool = "#ffff00"}
message.guild.roles.create({
    data: {name: args.slice(0, 1).join(" "), color: pog, mentionable: true}
}).then(role => {
    message.channel.send(`${role.name} created!`);
});
    }}