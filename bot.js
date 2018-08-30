const Discord = require('discord.js');
const commands = require('./commands');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.author.tag + ' in ' + msg.channel.name + ': ' + msg.content);
  if (msg.content[0] !== '=') return;
  const parts = msg.content.split(' ');
  const cmd = parts[0].slice(1);
  const text = msg.content.slice(cmd.length + 2);
  if (typeof commands[cmd] === 'string') {
    msg.channel.send(commands[cmd]);
  } else if (typeof commands[cmd] === 'function') {
    commands[cmd](msg, text, client);
  }
});

client.login('NDgyMjA2MDc4MTQzMjk5NTg0.DmYvkA.pp3ulsIvreHTnMDG04Zts-yXjB4');
