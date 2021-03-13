

module.exports = {
    name : 'purge',
 
    category : 'mod',
    description : 'purge <amount of msg>',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")){return message.reply("You don't have manage messages perms :\(")}
      var cookiesAmounts = args;
      if (Number.isNaN(+cookiesAmounts)){return message.reply("Please provide a number")}
      message.channel.bulkDelete(+cookiesAmounts)
				message.channel.send("Deleted " + args + " messages!")
			   
    }
}
