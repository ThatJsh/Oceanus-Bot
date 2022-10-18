const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HowGayCommand extends BaseCommand {
  constructor() {
    super('howgay', 'fun', []);
  }


  async run(client, message, args) {
    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    const howgayembed = new Discord.MessageEmbed()
      .setTitle(`Gay Machine Calculator`)
      .setDescription(`${member.username} is ` + rng + "% Gay🌈")
      .setColor("#dea5a4")
      .setTimestamp();

    message.channel.send(howgayembed);
  }
}