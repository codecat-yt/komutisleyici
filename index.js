const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs")
const prefix = "="


client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))


client.aliases = new Discord.Collection()
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    command.aliases.forEach(alias => client.aliases.set(alias, command.name))
    client.commands.set(command.name, command)
}


client.on('ready', () => {
    console.log(`Botumuz Hazir!`)

    client.user.setActivity("Fifa 20")

})

client.on("message" , async message => {
    if(message.author.bot) return
    
    if(!message.content.startsWith(prefix)) return 
    
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    
    if(cmd === null ) return
    
    if(cmd) cmd.run(client, message, args)
    if(!cmd) return
  })
  

    client.login("NzQyMDUwOTYwMjkzMTAxNTk4.XzAezw.fRy55XOV-viAfqdhQg_gKPpFyuw")