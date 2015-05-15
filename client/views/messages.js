Template.sendMessage.events({
    'submit form': function (event, instance) {
        // We are building an application, so we don't want the form to reload the page.
        event.preventDefault();

        var song = instance.find('#trackId').value;
        instance.find('#trackId').value = '';

        var to = instance.find('#toUser').value;
        instance.find('#toUser').value = '';

        console.log(Meteor.userId());

        Messages.insert({
          message: song,
          _fromId: Meteor.userId(), // Add userId to each message.
          _toId: to,
          timestamp: new Date()
        });
    }
});
