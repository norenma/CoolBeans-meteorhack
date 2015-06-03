(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
} else {
  Meteor.publish("allUserNames", function() {
    if (this.userID) {
      return Meteor.users.find({}, {
        fields: {
          'profile.username': 1
        }
      });
    }
  });
}

})();
