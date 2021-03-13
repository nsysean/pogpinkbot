module.exports = {
    name : 'removetimeout',
 
    category : 'Functions',
    description : `removetimeout`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.reply("You don't have manage channels perms :\(")}

        message.channel.setRateLimitPerUser(0, ["Timeout set by " + message.author.username + " using pink bot"])
        message.reply(`Removed channel timeout`)
    }}