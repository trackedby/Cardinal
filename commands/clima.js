const weather = require('weather-js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
    if(error) return message.channel.send(error);
    if(!args[0]) return message.channel.send('Específique uma cidade')

    if(result === undefined || result.length === 0) return message.channel.send('Localização **inválida**');

    var current = result[0].current;
    var location = result[0].location;
    
    const weatherinfo = new Discord.MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor('#338DFF')
    .addField('Fuso Horário', `UTC${location.timezone}`, true)
    .addField('Tipo de Grau', 'Celsius', true)
    .addField('Temperatura', `${current.temperature}°`)
    .addField('Vento', current.winddisplay, true)
    .addField('Sensação Térmica', `${current.feelslike}°`, true)
    .addField('Umidade', `${current.humidity}%`)

    message.channel.send(weatherinfo)
    })
  }
  module.exports.help = {
  name: 'clima'
}
