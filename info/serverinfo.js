const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'serverinfo',
    category : 'info',
    description : 'Returns server info',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        
        const embed = new MessageEmbed()
            .setTitle(`${message.guild.name} Info`)
			.setThumbnail(message.guild.iconURL())
            .addFields({name: "Member Count", value: message.guild.memberCount}, {name: `Region`, value: message.guild.region}, {name: "VerificationLevel", value: message.guild.verificationLevel}, {name: "Owner", value: message.guild.ownerID})
             message.channel.send(embed)
       

    }
}
