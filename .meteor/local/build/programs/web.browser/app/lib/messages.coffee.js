(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.methods({
    hemtz: function(songID) {
      return Meteor.http.get('https://api.spotify.com/v1/tracks/' + songId, {
        timeout: 30000
      });
    }
  }, {
    searchSongs: function(name) {
      return Meteor.http.get('http://ws.spotify.com/search/1/track.json?q=' + name, {
        timeout: 30000
      });
    }
  });
}

})();
