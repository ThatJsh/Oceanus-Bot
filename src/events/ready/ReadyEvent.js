const BaseEvent = require('../../utils/structures/BaseEvent')

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client, message, args) {
    const botStatus = [
      `${client.guilds.cache.size} servers!`,
      'o!help',
      `My ${client.users.cache.size} users!`,
    ];

    setInterval(() => {
      const status = botStatus[Math.floor(Math.random() * botStatus.length)];
      client.user.setActivity(status, {
        type: 'WATCHING'
      });
    }, 6000);

    client.user.setStatus('dnd'); // sets the bots status

    console.log(`${client.user.username} is now online!`); // consoles logs this when bot is turned on
  };
}