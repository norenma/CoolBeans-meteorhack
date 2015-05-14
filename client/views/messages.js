Template.sendMessage.events({
    'submit form': function (event, instance) {
        // We are building an application, so we don't want the form to reload the page.
        event.preventDefault();

        var bestSongEver = '5nNmj1cLH3r4aA4XDJ2bgY'
        var to = instance.find('#toUser').value;
        instance.find('#toUser').value = '';

        console.log(Meteor.userId());

        Messages.insert({
          message: bestSongEver,
          _fromId: Meteor.userId(), // Add userId to each message.
          _toId: to,
          timestamp: new Date()
        });
    }
});
