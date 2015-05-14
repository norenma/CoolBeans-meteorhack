Template.receivedMessages.helpers({
  messages: function() {
    return Messages.find();
  },
  user: function() {
    if(this._userId){
      console.log("this", this);
      return Meteor.users.findOne({_id: this._fromId});
    }
  }
});
