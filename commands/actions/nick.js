

module.exports = {
    name : 'nick',
 
    category : 'mod',
    description : 'nick <@user> <nickname>',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const person = message.mentions.members.first()
        if(!person){return message.reply("Which member are you changing their nickname..???")}
        if(!person.permissions.has("MANAGE_NICKNAMES")){return message.reply("Sorry you dont have manage nicknames perms")}
person.setNickname(args.slice(1).join(" "))
}}