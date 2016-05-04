import { Meteor } from 'meteor/meteor';
import { SignUps } from './collections';

Meteor.startup(() => {
    // code to run on server at startup
    if(SignUps.find().count() === 0){
        console.log("DATABASE IS EMPTY!");
    }
});


Meteor.methods({
    emailHandler: (email) => {
        console.log(`SERVER: received email ${email}`);
        // todo: Do vaalidation!!!
        SignUps.insert({
            email,
            createdAt: new Date(), // current time
        });
    }
})
