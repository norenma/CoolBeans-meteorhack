Template.receivedMessages.helpers({
  messages: function() {
    if(Meteor.user()){
      return Messages.find({_toId: Meteor.user().username});
    }
  },
  user: function() {
    if(Meteor.user()){
      return Meteor.users.findOne({_id: this._fromId});
    }
  }
});
