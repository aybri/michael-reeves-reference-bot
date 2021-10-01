//const readline = require('readline').createInterface({
//	input: process.stdin,
//	output: process.stdout
//})

const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

client.once('ready', () => {
	console.log('cum');
	client.user.setActivity('Michael Reeves\'s videos.', { type: 'WATCHING' });
});

client.on('message', message => {
	if (message.guild === null) {
		console.log(`[DM][${message.author.username}]: ${message.content}`);
	} else {
		console.log(`[${message.guild}][#${message.channel.name}][${message.author.username}]: ${message.content}`);
	}

	if (message.content.toLowerCase().startsWith(`i could`) || message.content.toLowerCase().startsWith(`i can`)) {
		message.channel.send("", { files: ["videos/dumbass.mp4"] });
	} else if (message.content.toLowerCase().includes(`cum`)) {
		message.channel.send("Carriage Utility Mechanism", { files: ["videos/cum.mp4"] });
	} else if (message.content.toLowerCase().includes(`facial detection`)) {
		message.channel.send("Nah, I prefer Racial Detection.", { files: ["videos/demonetized.mp4"] });
	} else if (message.content.toLowerCase().includes(`nightmare`)) {
		message.channel.send("https://youtu.be/-QyNm80lfTI");
	} else if (message.content.toLowerCase().startsWith(`when will impulse be done with his schoolwork`)) {
		message.channel.send("At the last fucking minute because he wastes his goddamn time.")
    }



	/* if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `!robotics`) {
		message.channel.send('https://www.youtube.com/watch?v=QksAVT0YMEo')
	} else if (message.content === `I could build that.`) {
		message.channel.send(`no`)
		message.channel.send(`you`)
		message.channel.send(`can`)
		message.channel.send(`not`)
		message.channel.send(`dumbass`)
	} else if (message.content === `I could code that.`) {
		message.channel.send(`no`)
		message.channel.send(`you`)
		message.channel.send(`can`)
		message.channel.send(`not`)
		message.channel.send(`dumbass`)
	} else if (message.content === `!roboticsscript`) {
		message.channel.send(`You: !robotics\nMe: <https://www.youtube.com/watch?v=QksAVT0YMEo>\nYou: I could build that.\nMe: no\nyou\ncan\nnot\ndumbass`)
	} */
});

//readline.question(`>`, command => {
//	message.send(client, `${command}`, 793213491984597002)
//})

client.login(token);
