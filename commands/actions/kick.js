module.exports = {
    name:'kick',
  
    run:async(client,message,args)=>{
        if(!message.member.hasPermission('KICK_MEMBERS')) 
        return message.channel.send("You don't have permission to use that command.");

        let person = message.guild.member(message.mentions.users.first());

        if (!person)return message.channel.send('Pls specify who u want to kick');
        if (!person.kickable)return message.channel.send('I cant kick this person because i dont have perms to.');
        if (person.id === message.author.id)return message.channel.send('You cannot kick yourself. Why would u kick yourself? lol.');
        
        let reason = args.slice(1).join(" ") || ("No reason")
client.users.get(person.id).send(`You have been kicked from ${message.guild.name} for ${reason}.`);
        person.kick({
            reason:reason
        });

    }
}