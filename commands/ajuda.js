const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args, color, langUsing) => {

  fs.readFileSync("./Storage/prefixes.json", "utf8");

  setTimeout(() => {
    let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));

    switch(args[0]) {

      case "foto":
        const avatarHelp = new Discord.MessageEmbed()
          .setAuthor("📷| Foto de perfil", client.user.avatarURL)
          .setDescription("Visualizar a foto do membro mencionado")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}avatar [<@user>]`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: avatarHelp});
            return;
          };

        message.channel.send({embed: avatarHelp})

        break;
      case "banir":
        const banHelp = new Discord.MessageEmbed()
          .setAuthor("❌| Banir", client.user.avatarURL)
          .setDescription("Banir um membro mencionado.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}banir <@usuário>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: banHelp});
            return;
          };

        message.channel.send({embed: banHelp})
        break;
      case "embed":
          const embedHelp = new Discord.MessageEmbed()
          .setAuthor("💬| Embed", client.user.avatarURL)
          .setDescription("Gerar um embed com mensagem.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}embed !<título> !<descrição>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: embedHelp});
            return;
          };

          message.channel.send({embed: embedHelp});
          break;
      case "ajuda":
        const helpHelp = new Discord.MessageEmbed()
        .setAuthor("🆘| Ajuda", client.user.avatarURL)
        .setDescription("Mostrar lista de comandos.")
        .addField("Uso", `${prefixes[message.guild.id].prefixes}ajuda <comando>`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(``, client.user.avatarURL)
        .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
          message.author.send({embed: helpEmbed});
          return;
        };

        message.channel.send({embed: helpHelp});
        break;
      case "expulsar":
        const kickHelp = new Discord.MessageEmbed()
          .setAuthor("🦵| Expulsar", client.user.avatarURL)
          .setDescription("Expulsar o membro mencionado.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}expulsar <@membro>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: kickHelp});
            return;
          };

        message.channel.send({embed: kickHelp});
        break;

      case "ping":
        const pingHelp = new Discord.MessageEmbed()
          .setAuthor("🏓| Ping", client.user.avatarURL)
          .setDescription("pong!")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}ping`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Veja suas mensagens privadas.. :ok_hand:**`);
            message.author.send({embed: pingHelp});
            return;
          };

        message.channel.send({embed: pingHelp});
        break;
      case "limpar":
        const purgeHelp = new Discord.MessageEmbed()
          .setAuthor("🧨| Apagar Mensagens", client.user.avatarURL)
          .setDescription("Deletar uma quantidade de mensagens.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}limpar <quantidade>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Veja suas mensagens privadas.. :ok_hand:**`);
            message.author.send({embed: purgeHelp});
            return;
          };

        message.channel.send({embed: purgeHelp});
          break;
        case "falar":
          const sayHelp = new Discord.MessageEmbed()
            .setAuthor("🗣️| Falar pelo Cardinal", client.user.avatarURL)
            .setDescription("Faz o Cardinal falar o que você quiser.")
            .addField("Uso", `${prefixes[message.guild.id].prefixes}falar <frase>`)
            .setThumbnail(client.user.avatarURL)
            .setFooter(``, client.user.avatarURL)
            .setColor(color)

            if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
              message.channel.send(`:white_check_mark: **| Veja suas mensagens privadas.. :ok_hand:**`);
              message.author.send({embed: sayHelp});
              return;
            };

          message.channel.send({embed: sayHelp});
          break;

      case "userinfo":
        const userinfoHelp = new Discord.MessageEmbed()
          .setAuthor("📊| Informações de Usuário", client.user.avatarURL)
          .setDescription("Mostra informações do membro mencionado.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}userinfo <@usuário>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: userinfoHelp});
            return;
          };

        message.channel.send({embed: userinfoHelp});
        break;

      case "clima":
        const weatherHelp = new Discord.MessageEmbed()
          .setAuthor("🌧| Clima", client.user.avatarURL)
          .setDescription("Mostra informações do clima da cidade indicada.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}clima <cidade>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: weatherHelp});
            return;
          };

        message.channel.send({embed: weatherHelp});
        break;

      case "lojaval":
        const lojavalHelp = new Discord.MessageEmbed()
          .setAuthor("🛒| Loja Valorant", client.user.avatarURL)
          .setDescription("Mostra suas ofertas da sua conta vinculada com o nosso servidor.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}lojaval`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: lojavalHelp});
            return;
          };

        message.channel.send({embed: lojavalHelp});
        break;

      case "lol":
        const lolHelp = new Discord.MessageEmbed()
          .setAuthor("ℹ️| Informações LOL", client.user.avatarURL)
          .setDescription("Mostra informações do invocador indicado **(somente servidor BR)**.")
          .addField("Uso", `${prefixes[message.guild.id].prefixes}lol <nome do invocador>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(``, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
            message.author.send({embed: lolHelp});
            return;
          };

        message.channel.send({embed: lolHelp});
        break;

      default:
        const helpEmbed = new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
          .setDescription("Olá, eu sou o(a) Cardinal. Um sistema com múltiplas funções!\nEstou cuidando de tudo por aqui, se liga nos meus comandos e dos meus colegas 😎.\n⠀")
          .addField("\🔨 Comandos da Administração", `__${prefixes[message.guild.id].prefixes}banir <@membro>__ - banir o membro mencionado\n__${prefixes[message.guild.id].prefixes}expulsar <@membro>__ - expulsar o membro mencionado\n__${prefixes[message.guild.id].prefixes}limpar <quantidade de mensagens>__ - deleta uma quantia específica de mensagens\n‎⠀‎`)
          .addField("\🎮 Comandos de Jogos", `__${prefixes[message.guild.id].prefixes}lojaval__ - ver as ofertas da sua loja do Valorant.\n__${prefixes[message.guild.id].prefixes}lol__ <nome do invocador> - ver as informações do invocador indicado **(somente servidor BR)**`, true)
          .addField("\📃 Comandos informativos", `__${prefixes[message.guild.id].prefixes}foto @membro__ - mostrar a foto de perfil do usuário mencionado\n__${prefixes[message.guild.id].prefixes}clima <cidade>__ - ver o clima da cidade indicada\n__${prefixes[message.guild.id].prefixes}ping__ - ver meu delay\n__${prefixes[message.guild.id].prefixes}userinfo @membro__ - mostrar as informações do usuário mencionado`, true)
          .addField("\:red_car: Comandos divertidos", `__${prefixes[message.guild.id].prefixes}embed !<título> !<descrição>__ - gerar um embed\n__${prefixes[message.guild.id].prefixes}falar <frase>__ - fazer o Cardinal falar o que você quiser.!`, true)
          .setTimestamp()
          .setFooter(`O meu prefix é ${prefixes[message.guild.id].prefixes}`, client.user.avatarURL)
          .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: | Veja suas mensagens privadas.. :ok_hand:`);
          message.author.send({embed: helpEmbed});
          return;
        };

        message.channel.send({embed: helpEmbed});
        break;
    }
  }, 1000);
}

module.exports.help = {
    name: "ajuda"
}
