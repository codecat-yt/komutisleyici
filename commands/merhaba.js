const discord = require("discord.js")

module.exports = {
    name: "merhaba",
    aliases: ["sicak bir karsilama"],
    description: "sana cevap verir",

    run: async (client, message, args) => {
        message.channel.send("Merhaba insan!")
    }
}