const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  // user getting
  const user = message.mentions.users.first() || message.author;

  // perms checking
  if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
    message.channel.send(`${language["foto"].noEmbedPermission}`);
    return;
  }
  // message sending
  let showingAvatarMessage = language["foto"].showingAvatar;
  const showingAvatar = showingAvatarMessage.replace("${user}",user.username);

   	message.channel.send(`${showingAvatar}`).then(() => {
			setTimeout(() => {
        // embed
        let requestedByMessage = language["foto"].requestedBy;
        const requestedBy = requestedByMessage.replace("${author}", message.author.username);

				const embed = new Discord.MessageEmbed()
				.setAuthor(`${user.username}`, user.avatarURL)
				.setImage(user.avatarURL ({ dynamic: true, format: "png", size: 1024 }))
				.setFooter(`${requestedBy}`, message.author.avatarURL)
        .setTimestamp()
				.setColor(color)

        // embed sending
			message.channel.send({embed: embed});
		}, 100);
	 });
};

module.exports.help = {
  name: 'foto'
}
