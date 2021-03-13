
module.exports = {
    name : 'setgender',
  
    category : 'test',
    description : `setbio <sex>`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      return message.channel.send("Sorry cmd is in testing..")
      const target = message.author
      if (message.content === 'xsetgender male'){
        Inventory.findOneAndUpdate({ authorid: `${message.author.id}`, gender: `male` })
      } else   if (message.content === 'xsetgender female'){
        Inventory.findOneAndUpdate({ authorid: `${message.author.id}`, gender: `female` })
    } else  {
      message.channel.send("male or female")
    }


  
			message.channel.send(`Gender set to: ${db.get(`${target.id}gender`)}`)
    }
}