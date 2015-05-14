Template.sendMessage.events({
    'button click': function (event, instance) {
        // We are building an application, so we don't want the form to reload the page.
        event.preventDefault();

        var text = instance.find('form').value;
        instance.find('form').value = '';

        Messages.insert({text: text});

    }
});