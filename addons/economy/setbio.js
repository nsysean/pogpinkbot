
module.exports = {
    name : 'setbio',
 
    category : 'test',
    description : `setbio <stuff>`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      
  return message.channel.send("Sorry cmd is in testing")
const target = message.author


	db.set(`${target.id}bio`, `${args.join(' ')}`)
			
			message.channel.send(`Bio set to: ${db.get(`${target.id}bio`)}`)
    }
}