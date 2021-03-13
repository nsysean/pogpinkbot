const Discord = require("discord.js")
let tails = new Discord.MessageEmbed()
.setColor('207173')
.setTitle('Coinflip')
.setThumbnail('https://i.ibb.co/Y7pXQwf/circle-cropped-1.png')
.setDescription('You got tails UwU')
let heads =  new Discord.MessageEmbed()
.setColor('207173')
.setTitle('Coinflip')
.setThumbnail('https://i.ibb.co/F3j4ftB/circle-cropped.png')
.setDescription('You got heads UwU')
module.exports = {
    name : 'coinflip',
    aliases : ['cf'],
    category : 'fun',
    description : 'flip a coin',
	
		

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        let HT = [
        heads,
        tails
    ]
    let pick = HT[Math.floor(Math.random() * HT.length)];

    message.channel.send(pick)
    }
}



