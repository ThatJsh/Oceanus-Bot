const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const {
  MessageEmbed
} = require("discord.js");

module.exports = class UptimeCommand extends BaseCommand {
  constructor() {
    super('uptime', 'info', []);
  }

  async run(client, message, args) {

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    const upembed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle(`My Uptime is **${days}d ${hours}h ${minutes}m ${seconds}s**`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp()

    message.channel.send(upembed)
  }

}