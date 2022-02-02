const Discord = require('discord.js');

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

    // no perms check

  if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`${language["kick"].noAuthorPermission}`);

    // no mention check

    if (message.mentions.users.size < 1) return message.channel.send(`${language["expulsar"].noMention}`);

    let user = message.mentions.users.first();

    // perms checking again

    if(message.mentions.members.first().hasPermission('MANAGE_GUILD') || message.mentions.members.first().hasPermission('ADMINISTRATOR') || !message.mentions.members.first().kickable) {
      let cannotKickMessage = language["expulsar"].cannotKick;
      const cannotKick = cannotKickMessage.replace("${user}", user.id);

      message.channel.send(`${cannotKick}`);
      return;
    };

    // other checks

    if(user.id === client.user.id) return message.channel.send(`${language["expulsar"].cannotKickBot}`);
    if(user.id === message.author.id) return message.channel.send(`${language["expulsar"].cannotKickAuthor}`);

    // message sending (await message)

    let kickingUserMessage = language["expulsar"].kickingUser;
    const kickingUser = kickingUserMessage.replace("${user}", user.id);

  message.channel.send(`${kickingUser}`)
  .then(() => {
    message.channel.awaitMessages(response => response.author.id === message.author.id, {
      max: 1,
      time: 25000,
      errors: ['time'],
    })

    // collected

    .then((collected) => {
      message.mentions.members.first().kick({ reason: collected.first().content })
      .then(() => {
        let kickedUserLine1Message = language["expulsar"].kickedUserLine1;
        let kickedUser1U = kickedUserLine1Message.replace("${user}", user.id);
        let kickedUser1 = kickedUser1U.replace("${guild}", message.guild.name);

        let kickedUserLine2Message = language["expulsar"].kickedUserLine2;
        let kickedUser2 = kickedUserLine2Message.replace("${reason}", collected.first().content);

        let kickedUserLine3Message = language["expulsar"].kickedUserLine3;
        let kickedUser3 = kickedUserLine3Message.replace("${moderator}", message.author.tag);

        message.channel.send(`${kickedUser1}\n${kickedUser2}\n${kickedUser3}`);
    });
  })

    // error catching
    .catch(() => {
      message.channel.send(`${language["expulsar"].canceled}`);
    });
  });
};

module.exports.help = {
  name: 'expulsar'
}
