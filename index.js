const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("active")
    const guild = client.guilds.cache.get('743952264032419959')

    const userCountChannel = guild.channels.cache.get('751499101090087103')
    const userCount = guild.members.cache.filter(member => !member.user.bot).size
    userCountChannel.setName(`USER COUNT: ${userCount}`)

    const memberCountChannel = guild.channels.cache.get('751501642481926366')
    const memberCount = guild.members.cache.size
    memberCountChannel.setName(`MEMBER COUNT: ${memberCount}`)
})

client.login(process.env.token);