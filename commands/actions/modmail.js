

module.exports = {
    name : 'modmail',
 
    category : 'mod',
    description : 'modmail <@staff> <message>',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const person = message.mentions.members.first()
        if(!person){return message.reply("Which staff are you mailing to..?")}
        if(!person.permissions.has("ADMINISTRATOR")){return message.reply("Sorry that member isn't an admin, therefore you cant mod mail them.")}
person.send(`Mod mail from ${message.author.username}: ${args.slice(1).join(" "}`);
message.reply("Mod mail sent")
}}
