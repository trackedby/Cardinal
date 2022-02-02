 
global.Discord = require('discord.js')
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const fs = require('fs');
const moment = require('moment');

const client = new Discord.Client();
const config = require("./Storage/config.json");
const prefixgen = config.prefix;
const version = config.version;
const logging = config.logging;
const color = config.color;
const langUsed = config.lang;
const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");

client.commands = new Discord.Collection();
client.on("guildMemberAdd", member => {
    member.guild.channels.cache.get("902348374542544937").send(`Bem-vindo ${member.user} à nossa família`);
    console.log(member.user.id + ' entrou para a família');
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log(new Error("[Cardinal] Ocorreu um erro ao carregar os comandos do sistema principal."));
    process.exit(1);
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./commands/${f}`);
    console.log(`[Cardinal] Carregado ${f}.`);
    client.commands.set(props.help.name, props);
  });
})


/* ########################################################## */
/*                                                            */
/*      LANGUAGE CHECKS (do not modify anything in here)      */
/*                                                            */
/* ########################################################## */


if (langUsed !== "en-US" && langUsed !== "RO") {
  console.log(new TypeError(`[Cardinal] Um erro ocorreu ao carregar as linguagens do servidor`));
  process.exit(1);
};

let langUsing = "en-US";
let language = require(`./messages/messages_${langUsing}.json`);

if (langUsed === "en-US") {
  langUsing = "en-US";
  language = require(`./messages/messages_${langUsing}.json`);
  console.log(`${language.langLoaded}`);
} else if (langUsed === "RO") {
  langUsing = "RO";
  language = require(`./messages/messages_${langUsing}.json`);
  console.log(`${language.langLoaded}`);
};


/* ########################################################## */
/*                                                            */
/*          CHECKS (do not modify anything in here)           */
/*                                                            */
/* ########################################################## */


if (process.version.slice(1).split('.')[0] < 8) {
  console.log(new Error(`[Cardinal] Você precisa ter o NodeJS 8 (ou superior) instalado na sua máquina.`));
  process.exit(1);
};

if (logging !== true && logging !== false) {
  console.log(new TypeError(`[Cardinal] O valor de logging (registrar) precisa ser 'true' ou 'false'.`));
  process.exit(1);
};

if (logging === true) {
  console.log(`[Cardinal] Modo REGISTRAR foi ativado com sucesso..`);
};


/* ########################################################## */
/*                                                            */
/*      CLIENT LOGING (do not modify anything in here)        */
/*                                                            */
/* ########################################################## */


client.login(config.token);


/* ########################################################## */
/*                                                            */
/*      CLIENT EVENTS (do not modify anything in here)        */
/*                                                            */
/* ########################################################## */

// error notifiers

client.on("error", (e) => {
  console.error(e);
});

client.on("warn", (e) => {
  console.warn(e);
});

process.on('unhandledRejection', error => {
  console.error(`Erro: \n${error.stack}`);
});

// client ready event1

client.on('ready', () => {
	
// activity

  client.user.setActivity(`📚 administrando daora`, { type: 'WATCHING' });
});

setInterval(() => {
  console.log(`[Cardinal] Ping: ${Math.round(client.ws.ping)}`);
}, 30000);

// client message event

client.on("message", (message) => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let argresult = args.join(" ");

  // custom prefixes
  let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id] || prefixes[message.guild.id] === undefined) {
    prefixes[message.guild.id] = {
      prefixes: "+"
    };
    fs.writeFile("./Storage/prefixes.json", JSON.stringify(prefixes, null, 2), (err) => {
      if (err) console.log(err)
    });
  };

  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return;

  // command hanler

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args,color,langUsing);

  // logging

  if(logging === true) {
    if(!argresult || argresult === "") {
      const LoggingNoArgs = `[\x1b[36m${moment().format("LLLL")}\x1b[0m] Comando ${cmd} foi executado por \x1b[36m${message.author.tag}\x1b[0m (ID: \x1b[36m${message.author.id}\x1b[0m)`;
      console.log(LoggingNoArgs);
    } else {
      const LoggingArgs = `[\x1b[36m${moment().format("LLLL")}\x1b[0m] Comando ${cmd} ${argresult} foi executado por \x1b[36m${message.author.tag}\x1b[0m (ID: \x1b[36m${message.author.id}\x1b[0m)`;
      console.log(LoggingArgs);
    };
  };

});
