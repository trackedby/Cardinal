const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const eleicao = new Discord.MessageEmbed()
    .setAuthor(`ELEIÇÃO POSSE DISCORD | IMPEACHMENT BEIÇO`)
    .setDescription(`Votação encerra em 14/01/2021`)
    .setColor('#ff9900')
    .addField('**1️⃣ |** Lucas Martins', 'Não paga funcionário')
    .addField('**2️⃣ |** Lucas Santos', 'Fica mutado na call')
    .addField('**3️⃣ |** Victor Martins', 'Fala muito')
    .addField('**4️⃣ |** Kayque Leal', 'Causador de discórdia')
    .addField('**5️⃣ |** Charles', 'Fantasma')

    const reactionMessage = await message.channel.send(eleicao)
    await reactionMessage.react('1️⃣');
    await reactionMessage.react('2️⃣');
    await reactionMessage.react('3️⃣');
    await reactionMessage.react('4️⃣');
    await reactionMessage.react('5️⃣');
    }
  module.exports.help = {
  name: 'eleição'
}
