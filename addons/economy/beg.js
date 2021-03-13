const talkedRecently = new Set();

module.exports = {
    name : 'beg',
  
    category : 'test',
    description : `beg for tickets`,
   
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
     
      const editJsonFile = require("edit-json-file");

      // If the file doesn't exist, the content will be an empty object by default.
      let file = editJsonFile(`../../profile.json`);
      
      // Set a couple of fields
      file.set("e", "Earth");
  let amount = await Math.floor(Math.random() * 500);
  let rand = [`${amount}`, 'No']
    
     
    let pick = rand[Math.floor(Math.random() * rand.length)];
    if(pick === `${amount}`){
     db.add(`${message.author.id}.balance`, amount)
    
      return message.channel.send(`You got ${amount} tickets from PinkBot! Your current balance is ${db.get(`${message.author.id}.balance`)} tickets.`)
    } 
    let rand1 = [`Nah you dont get any money 😳`, `HOW DARE U BEG FOR FREE ROBUX`]
  let pick1 = rand[Math.floor(Math.random() * rand1.length)];
    if(pick === `No`){
        return message.channel.send(pick1)
    }



    
    }
}