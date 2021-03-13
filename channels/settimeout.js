module.exports = {
    name : 'settimeout',
 
    category : 'Functions',
    description : `settimeout <time in seconds>`,

    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.reply("You don't have manage channels perms :\(")}
        var cookiesAmounts = args;
        if (Number.isNaN(+cookiesAmounts)){return message.reply("Please provide a number")}
        message.channel.setRateLimitPerUser(+cookiesAmounts, ["Timeout set by " + message.author.username + " using pink bot"])
        message.reply(`channel timeout set to ${+cookiesAmounts}`)
    }}