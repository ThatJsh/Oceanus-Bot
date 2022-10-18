const BaseCommand = require('../../utils/structures/BaseCommand');
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    const subReddits = ["animemes", "animemes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new Discord.MessageEmbed()
      .setColor("PINK")
      .setImage(img)
      .setTitle(`Here is your meme stranger, it is from r/animemes ♡`)
      .setURL(`https://www.reddit.com/r/amimemes/`)
      .setFooter(message.author.tag)
      .setTimestamp();

    message.channel.send(embed)
  }
}