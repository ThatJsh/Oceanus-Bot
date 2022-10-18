const { send } = require('process');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class deleteCommandCommand extends BaseCommand {
  constructor() {
    super('delete', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant use this command!");
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" I do not have \`MANAGE_MESSAGES\` permission.");
    if (!args[0]) return message.channel.send("You must state a number of messages to delete. \`o!delete number\`");
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send("Number stated is not a valid number.");
    if (!Number.isInteger(amountToDelete)) return message.channel.send("Number stated must be a whole number.");
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send("The number stated must be within 2-100")
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(`Deleted ${messages.size}!`));
    } catch (err) {
      console.log(err);
      message.channel.send(`I was unable to delete the amount stated make sure they're within 14 days`)
    }
  }
}