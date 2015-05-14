Messages = new Mongo.Collection('messages');

if(Meteor.isServer){
    //HTTP.get()

    Meteor.methods({
        hemtz: function(songId) {
            var result = Meteor.http.get('https://api.spotify.com/v1/tracks/'+songId, {timeout:30000});
            console.log(result);
            return result; //HTTP.get('');
        }
    })
}
