const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'forcesay',
  
    category : 'Owner cmds',
    description : `forcesay <user> <stuff>`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
       if (message.author.id !== "603448257653374976") {
    return message.channel.send(`You can't use this'`);
  }
  const channel = message.mentions.channels.first()
  if(!channel){
      return message.channel.send("which channel")
  }
let channelTarget = message.guild.channels.cache.get(channel.id);

  message.delete()

      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if(!user) return message.channel.send('Please provide a user!')
      const webhook = await message.channel.createWebhook(user.displayName, {
          avatar: user.user.displayAvatarURL(),
          channel: (message.channel/*was channelTarget*/)
      })
      await webhook.send(args.slice(2).join(' ')).then(() => {
          webhook.delete()
      })
    }
}

