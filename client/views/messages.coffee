Template.sendMessage.events
        'submit form': (event, instance) ->
            event.preventDefault()
        song = (instance.find '#trackId').value
        to = (instance.find '#toUser').value
        (instance.find '#toUser').value = ''

        Messages.insert {
            message: song
            _fromId: Meteor.userId
            _toId: to
            timestamp: new Date
        }
