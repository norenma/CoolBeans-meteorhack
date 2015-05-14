Template.sendMessage.events({
    'submit form': function (event, instance) {
        // We are building an application, so we don't want the form to reload the page.
        event.preventDefault();

        var text = instance.find('#message').value;
        instance.find('#message').value = '';

        var to = instance.find('#toUser').value;
        instance.find('#toUser').value = '';

        console.log(Meteor.userId());

        Messages.insert({
          message: text,
          _fromId: Meteor.userId(), // Add userId to each message.
          _toId: to,
          timestamp: new Date()
        });

        Meteor.call('hemtz', "hej", function(err, result){
            var audio = new Audio()
            audio.src = result.data.preview_url;
            //console.log(track);
            audio.play();
        });



    }
});
