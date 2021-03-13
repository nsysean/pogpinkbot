module.exports = {
    name: "leave",
  
    description: "leave vc",
    run: async (client, message, args) => {
        message.guild.me.voice.channel.leave();
    }}