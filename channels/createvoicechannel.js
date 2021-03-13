module.exports = {
    name : 'createvoicechannel',
 
    category : 'Functions',
    description : `createvoicechannel <channel name>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.reply("Sorry you don't have manage channels perms")}
        message.guild.channels.create(args.join(" "), { type: 'voice', reason: 'N/A' });
}}