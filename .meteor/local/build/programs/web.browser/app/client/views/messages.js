(function(){
(function() {
  var song, to;

  Template.sendMessage.events({
    'submit form': function(event, instance) {
      return event.preventDefault();
    }
  }, song = (instance.find('#trackId')).value, to = (instance.find('#toUser')).value, (instance.find('#toUser')).value = '', Messages.insert({
    message: song,
    _fromId: Meteor.userId,
    _toId: to,
    timestamp: new Date
  }));

}).call(this);

})();
