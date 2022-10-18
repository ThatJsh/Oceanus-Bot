const { moveMessagePortToContext } = require('worker_threads');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
    //o!nuke reason
    //Permission Checking:
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I cant use this command');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" I do not have \`MANAGE_CHANNELS\` permission.");

    //Variables:
    let reason = args.join(" ");
    const nukeChannel = message.channel;

    //Input Checking:
    if (!reason) reason = "No reason Given"
    if (!nukeChannel.deletable) return message.channel.send("This channel is not deletable.")

    //Executing:
    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete(reason).catch(err => console.log(err))
  }
}