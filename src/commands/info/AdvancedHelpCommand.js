const pagination = require('discord.js-pagination');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')


module.exports = class PingCommand extends BaseCommand {
    constructor() {
        super('help', 'info', []);
    }

    async run(client, message, args) {

        const BotInfo = new Discord.MessageEmbed()
            .setColor(0xD866BE)
            .setTitle('Bot Information')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .setImage('https://i.imgur.com/9OA50r1.jpeg')
            .addField('**Prefix**', 'Bots prefix is: `o!`')
            .addField('**Pages**', '`1. Bot Information`, `2. Information`, `3. Fun`, `4.Moderation`')
            .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
            .setColor(0xD86685)
            .setTitle('Information')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .setImage('https://i.imgur.com/9OA50r1.jpeg')
            .addField('`o!ping`', 'Shows you the bots ping!')
            .addField('`o!weather`', 'Shows you the weather for specified location, e.g. `United Kingdom`')
            .addField('`o!uptime`', 'Shows you the uptime of the bot.')
            .addField('`o!!serverinfo`', 'Shows you information about current server,')
            .addField('`o!userinfo`', 'Shows you info about a specific user')

        const fun = new Discord.MessageEmbed()
            .setColor(0xD88066)
            .setTitle('Fun')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .setImage('https://i.imgur.com/9OA50r1.jpeg')
            .addField('`o!8ball`', 'Ask it a question and it will respond.....')
            .addField('`o!howgay`', 'Tells you how gay someone is.  👀')
            .addField('`o!meme`', 'Sends a random meme from animemes.')
            .addField('`o!baka`', 'Shows you a baka gif.')
            .addField('`o!say`', 'Creates a message in an embed.')

        const moderation = new Discord.MessageEmbed()
            .setTitle('moderation')
            .setColor(0xD88066)
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .setImage('https://i.imgur.com/9OA50r1.jpeg')
            .addField('`o!kick`', 'Kicks a specified user.')
            .addField('`o!ban`', 'Bans a specified user.')
            .addField('`o!nuke`', 'Deletes a channel then reinstates it.')
            .addField('`o!purge`', 'Purges messages from 2-100.')
            .addField('`o!kick`', 'Kicks user.')
            .addField('`o!unban`', 'Unbans a user by their ID.')

        const pages = [
            BotInfo,
            Information,
            fun,
            moderation,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}