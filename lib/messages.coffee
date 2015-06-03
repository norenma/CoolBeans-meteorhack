@Messages = new Mongo.Collection('messages');

if Meteor.isServer
    Meteor.methods {hemtz: (songID) ->
            Meteor.http.get 'https://api.spotify.com/v1/tracks/' + songId, {timeout:30000}
    }, searchSongs: (name) ->
            Meteor.http.get 'http://ws.spotify.com/search/1/track.json?q='+name, {timeout: 30000}



