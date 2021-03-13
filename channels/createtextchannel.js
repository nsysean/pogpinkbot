module.exports = {
    name : 'createtextchannel',
 
    category : 'Functions',
    description : `createtextchannel <channel name>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.reply("Sorry you don't have manage channels perms")}
        message.guild.channels.create(args.join(" "), { type: 'text', reason: 'N/A' });
}}