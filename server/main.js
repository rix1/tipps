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
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(re.test(email));
        console.log(`SERVER: received email ${email}`);

        if(re.test(email)){
            SignUps.insert({
                email,
                createdAt: new Date(), // current time
            });
            return `Takk for interessen! Du er Tippser nummer ${SignUps.find().count()} 😄 Vi sender en epost så snart vi har mer info om Tipps!`;
        }else{
            return "Wops! Epost-addressen er feil eller allerede registrert...";
        }

    }
})
