const { Client } = require('discord.js')

const client = new Client()

client.on('ready', _ => {
    console.log('k im online or whatever')
})

client.on('message', message => {
    cooldata = { embed: { title: 'here are ur emojis dumbass', description: '' } }
    if (message.content === 'give me my fucking emojis') {
        message.guild.emojis.cache.map(e => cooldata.embed.description += `${e.toString()} <${e.animated ? 'a' : ''}:${e.name}:${e.id}\\>\n`)
        return message.channel.send('', cooldata)
    }
})

client.login('NDgyNjE0ODA1NjM1NzkyOTA2.XlvwFg.IiBzh88uA9X - bu7oqvm2LjTUVFo')