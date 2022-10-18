const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'info', []);
  }

  async run(client, message, args) {

    const ping = new Discord.MessageEmbed()
      .setColor("PINK")
      .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();

    message.channel.send(ping) //so it replys to the `!ping` command
  }
}