import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
    emailHandler: (email) => {
        console.log(`SERVER: received email ${email}`);
    }
})
