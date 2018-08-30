module.exports = {

    commands: 'mute, unmute, message, fetchid',

    help: 'SRAdmin. To see available commands, type !commands',

    about: 'SRAdmin bot is written by Lewis, with help from crawlr and pop4959.',

    mute(msg, text, client) {
        if (msg.member.roles.has('211580045901168641')) {
            //add the member to the Chat Restriction role
            let memb = msg.mentions.users.first();
            let guild = msg.guild.member(memb);
            let memb_id = text.split('>')[0].slice(2);
            let memb_tag = client.users.get(memb_id).tag;
            guild.addRole('213109747744768001');
            //send private message to the user
            client.users.get(memb_id).send('You have been muted on the server. Please speak to an admin for details.');
            //log command
            client.guilds.get('279036340488765441').channels.get('483788767228985355').send(memb_tag + ' *was muted.*');
        } else {
            msg.author.send('Sorry, you don\'t have permission to mute people!');
        }
    },

    /*
    test(msg, text, client) {
        if(msg.member.roles.some(['284176716082053130', '211579837825941504', '211580045901168641'] == true)) {
            //add the member to the Chat Restriction role
            let memb = msg.mentions.users.first();
            let guild = msg.guild.member(memb);
            let memb_id = text.split('>')[0].slice(2);
            let memb_tag = client.users.get(memb_id).tag;
            guild.addRole('213109747744768001');
            //send private message to the user
            client.users.get(memb_id).send('You have been muted on the server. Please speak to an admin for details.');
            //log command
            client.guilds.get('279036340488765441').channels.get('483788767228985355').send(memb_tag + ' *was muted.*');
        } else {
            msg.author.send('Sorry, you don\'t have permission to mute people!');
        }
    },
    */

    unmute(msg, text, client) {
        if (msg.member.roles.has('211580045901168641')) {
            //take Chat Restriction role away from member
            let memb = msg.mentions.users.first();
            let guild = msg.guild.member(memb);
            let memb_id = text.split('>')[0].slice(2);
            let memb_tag = client.users.get(memb_id).tag;
            guild.removeRole('213109747744768001');
            //send message to let the user know
            client.users.get(memb_id).send('Good news, you\'ve been unmuted on the server.');
            //log command
            client.guilds.get('279036340488765441').channels.get('483788767228985355').send(memb_tag + ' *was unmuted.*');
        } else {
            msg.author.send('Sorry, you don\'t have permission to unmute people!');
        }
    },

    fetchid(msg, text) {
        if (msg.member.roles.has('211580045901168641')) {
          let id = text.split('>')[0].slice(2);
          msg.author.send('The requested User ID is: ' + id);
      } else {
          msg.author.send('Sorry, you don\'t have permission to fetch a User ID!');
      }
    },

    message(msg, text, client) {
        if (msg.member.roles.has('211580045901168641')) {
            const name_only = /^<@\d+>\w*$/;
            const full_command = /^<@(\d+)> (.+)$/;
            let test = null;
            if (test = name_only.exec(text)) {
                msg.author.send('Please enter a message to send!');
                    console.log('Error sending message to user! (no message)');
                } else if (test = full_command.exec(text)) {
                    client.users.get(test[1]).send(test[2]);
                } else {
                    msg.author.send('Please run the command like so: !message @USER <Message>');
                    console.log('Error sending message to user! (no user to send to)');
            }
        } else {
            msg.author.send('Sorry, you don\'t have permission to send messages using the bot!');
        }
    },
}
