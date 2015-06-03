if Meteor.isClient
        Accounts.ui.config { passwordSignupFields: 'USERNAME_AND_EMAIL' }
else
    Meteor.publish "allUserNames", ->
            if this.userID
                Meteor.users.find {}, { fields: {'profile.username': 1} }
             