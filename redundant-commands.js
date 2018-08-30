//Slap a user command, from the IRC days
slap(msg, text) {
    msg.channel.send("Test02 slaps " + text + " around a bit with a large trout");
},

//run an 8ball
"8ball": function(msg, text) {
    const answers = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no',
        'Outlook not so good.',
        'Very doubtful.'];
    const choice = Math.floor(Math.random() * 20);
    msg.reply(answers[choice]);
},
