Messages = new Mongo.Collection('messages');

if(Meteor.isServer){
    //HTTP.get()

    Meteor.methods({
        hemtz: function(param1) {
            var result = Meteor.http.get('https://api.spotify.com/v1/tracks/5nNmj1cLH3r4aA4XDJ2bgY', {timeout:30000});
            console.log(result);
            return result; //HTTP.get('');
        }
    })
}