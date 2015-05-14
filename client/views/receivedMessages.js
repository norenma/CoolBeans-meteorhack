Template.receivedMessages.helpers({
  messages: function() {
    return Messages.find();
  },
  user: function() {
      console.log("this", this);
      return Meteor.users.findOne({_id: this._fromId});
  }
});
