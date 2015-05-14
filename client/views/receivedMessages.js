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

Template.receivedMessages.events({

  'click li': function(event, instance){
    console.log(this.message);
    Meteor.call('hemtz', this.message, function(err, result){
        var audio = new Audio()
        audio.src = result.data.preview_url
        console.log(result.data.preview_url);//data.preview_url;
        audio.play();
    });
  }
});
