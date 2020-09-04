const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("active")
    const guild = client.guilds.cache.get('743952264032419959')

    const memberCountChannel = guild.channels.cache.get('751501642481926366')
    const memberCount = guild.members.cache.size
    memberCountChannel.setName(`MEMBER COUNT: ${memberCount}`)
})

client.login(process.env.token);