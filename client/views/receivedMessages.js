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
  },
  audio: function(){
    var audio;
    if(!audio){
      audio = new Audio();
    }
    return audio;
  }
});

//TODO: Not best practise :(
var audio = new Audio();
Template.receivedMessages.events({
  'click li': function(event, instance){
    console.log(this.message);
    Meteor.call('hemtz', this.message, function(err, result){
      if(audio.currentTime === 0 || audio.src !== result.data.preview_url || audio.paused){
        audio.src = result.data.preview_url
        audio.play();
      }else{
        audio.pause();
      }
    });
  }
});
