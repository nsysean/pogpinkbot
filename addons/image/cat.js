const Discord = require("discord.js")
const got = require ("got")
module.exports = {
    name : 'cat',
    
    category : 'images',
    description : 'cats 😳',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        const fetch = require('superagent')

        let { body } = await fetch
        .get('aws.random.cat/meow')
        if(!{body}) return message.channel.send("Seems like the cats are hiding rip..");

        message.channel.send(body.file)

    }
}

