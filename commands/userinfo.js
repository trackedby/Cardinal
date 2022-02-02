const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, color, langUsing) => {
     const user = message.mentions.users.first() || message.author;
     const member = message.mentions.members.first() || message.member;
          const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.avatarURL)
          .setDescription("<@" + user.id + ">")
          .addField('Apelido', member.nickname ? member.nickname : 'Nenhum', true)
          .addField("Usuário", user.username, true)
          .addField('Registrado', `${moment(user.createdAt).format("DD/MM/YY")}`, true)
          .addField('É um bot?', user.bot ? 'Sim' : 'Não', true)
          .addField('Jogando agora', user.presence.game ? user.presence.game.name : 'Nada', true)
          .addField("Entrou em", `${moment(member.joinedAt).format("DD/MM/YY")}`, true)
          .addField("Cargos [" + member.roles.cache.size + "]", member.roles.cache.map(r => r.name).join(', '), true)
          .setThumbnail(user.avatarURL)
          .setColor('#dc3545')

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(":x: | Eu preciso da permissão `EMBED_LINKS` para executar este comando.");
            return;
          };

          message.channel.send({embed: embed})
};

module.exports.help = {
  name: 'userinfo'
}
