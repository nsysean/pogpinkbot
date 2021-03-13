
module.exports = {
    name : 'rob',
  
    category : 'test',
    description : `rob ppl for tickets`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      return message.channel.send("Sorry the rob command is under testing, please try again a few days later.")
       const target = message.mentions.users.first()
       if (!target){
           return message.channel.send("Please specify a user to rob")
       }
       
        let amount = await Math.floor(Math.random() * 500);
        let rand = [`${amount}`, 'No', 'No']
          
           
          let pick = rand[Math.floor(Math.random() * rand.length)];
          if (db.get(`${target.id}Tickets`) <= 0){
            return  message.channel.send("why would you rob that broke guy")
          }
          if(pick === `${amount}`){
            db.add(`${message.author.id}Tickets`, `${amount}`)
            db.add(`${target.id}Tickets`, -amount)
            return message.channel.send(`You robbed ${amount} tickets from ${target.username}! Your current balance is ${db.get(`${message.author.id}Tickets`)} tickets!`)
          } 
          if(pick === `No`){
              db.add(`${message.author.id}Tickets`, -500)
              db.add(`${target.id}Tickets`, 500)
              return message.channel.send("Oh no you got caught by the cops -500 tickets")
          }
     
   
     
    
    }
}