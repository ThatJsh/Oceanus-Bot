const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then((m) => m.delete({ timeout: 5000 }));

		if (!args[0]) return message.channel.send('please enter a users id to unban!').then((m) => m.delete({ timeout: 5000 }));

		let member;

		try {
			member = await client.users.fetch(args[0]);
		} catch (e) {
			console.log(e);
			return message.channel.send('Not a valid user!').then((m) => m.delete({ timeout: 5000 }));
		}

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.displayAvatarURL()}`, message.author.displayAvatarURL({ dynamic: true }));

		return message.guild.fetchBans().then((bans) => {
			const user = bans.find((ban) => ban.user.id === member.id);

			if (user) {
				embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
					.setColor('PINK')
					.addField('User ID', user.user.id, true)
					.addField('user Tag', user.user.tag, true)
					.addField('Banned Reason', user.reason != null ? user.reason : 'No reason')
					.addField('Unbanned Reason', reason);
				message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed));
			} else {
				embed.setTitle(`User ${member.tag} isn't banned!`)
					.setColor('PINK');
				message.channel.send(embed);
			}
		}).catch((e) => {
			console.log(e);
			message.channel.send('An error has occurred!');
		});
  }
}