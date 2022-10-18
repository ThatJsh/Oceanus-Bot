const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('Discord.js');
const {
  MessageEmbed
} = require("discord.js");

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }


  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cant use this command!")

    const mentionMember = message.mentions.members.first();
    let reason = args.slice(1).join(" "); //o!kick <args(0) aka @member> | <args(1) aka reason>
    if (!reason) reason = "No reason given";

    const kickembed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from **${message.guild.name}**`)
      .setDescription(`Reason: ${reason}`)
      .setColor("PINK")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!args[0]) return message.channel.send("You need to specify a user to kick");

    if (!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

    if (!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");

    try {
      await mentionMember.send(kickembed);
    } catch (err) {

    }

    try {
      await mentionMember.kick(reason);
    } catch (err) {
      return message.channel.send("I was unabe to kick this user!")
    }
  }
}