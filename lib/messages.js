Messages = new Mongo.Collection('messages');

if(Meteor.isServer){
    //HTTP.get()

    Meteor.methods({
        hemtz: function(param1) {
            return "Hej"; //HTTP.get('');
        }
    })
}