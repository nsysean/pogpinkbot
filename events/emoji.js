const client = require('../index')
const config = require('../config.json')
const Discord = require("discord.js")
const Timeout = new Discord.Collection();
const prefix = ("x")
let db = require("quick.db");



client.on('message', async message =>{
    //PEPE PACK
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
    
        if (command === 'pepeok') {
       
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:pepeOkie:802130802498207785> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
        } else if (command === 'pepehappy') {
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:pepeHappy:802467102724194324> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
           
        } else if (command === 'pepesalute'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:PepeSoldierSalute:802467139562504202> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
           
        } else if (command === 'pepeping'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:PeepoPing:804776979777323098> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
           
        } else if (command === 'pepe'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:monkaS:804776979092996136> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
            
        } else if (command === 'pepeban'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:FeelsBanMan:804776978379964416> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
        } else if (command === 'pepecry'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:PepeHands:791190431298879538> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
           
        } else if (command === 'pepesword'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<a:3048_Pepe_Sword:800631693719371797> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
          
        } else if (command === 'pepesweat'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:pepeSweat:802114117724143616> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
           
        } else if (command === 'pepefestive'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:festivepepe:804776979786104882> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
        } else if (command === 'pepeyikes'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:PepeYikes:804776979320143952> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
           
        } else if (command === 'pepekms'){ 
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:PepeKMS:804776980397686814> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
           
           
        } else if (command === 'pepechef'){
            const user = message.author
            const webhook = await message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),    
                channel: (message.channel/*was channelTarget*/)
            })
            await webhook.send("<:8061_pepe_chef:800258706695782410> " + args.join(' ')||("")).then(() => {
                webhook.delete()})
            
        }else if (command === 'pepepack'){
            let embed = new Discord.MessageEmbed()
.setTitle('Pepepack<:monkaS:804776979092996136>')
.setDescription(`Type ${prefix}emojiname (ur text) to add the emoji infront of ur text`)
.addFields(
    {name: 'pepeok', value: `<:pepeOkie:802130802498207785>`, inline: true},
    {name: 'pepehappy', value: `<:pepeHappy:802467102724194324>`, inline: true},
   
    {name: 'pepesalute', value: `<:PepeSoldierSalute:802467139562504202>`, inline: true},
    {name: 'pepeping', value: `<:PeepoPing:804776979777323098>`, inline: true},
    {name: 'pepe', value: `<:monkaS:804776979092996136>`, inline: true},
    {name: 'pepeban', value: `<:FeelsBanMan:804776978379964416>`, inline: true},
    {name: 'pepecry', value: `<:PepeHands:791190431298879538>`, inline: true},
    {name: 'pepesword', value: `<a:3048_Pepe_Sword:800631693719371797>`, inline: true},
    {name: 'pepesweat', value: `<:pepeSweat:802114117724143616>`, inline: true},
    {name: 'pepefestive', value: `<:festivepepe:804776979786104882>`, inline: true},
    {name: 'pepeyikes', value: `<:PepeYikes:804776979320143952>`, inline: true},
    {name: 'pepekms', value: `<:PepeKMS:804776980397686814>`, inline: true},
    {name: 'pepechef', value: `<:8061_pepe_chef:800258706695782410>`, inline: true}
    

)
.setTimestamp()
.setColor('#B85A21');
            message.channel.send(embed)
        }
    
  
})