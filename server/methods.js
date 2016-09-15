import {SignUps, Beacons} from '../imports/api/collections';

Meteor.methods({
	emailHandler: (email) => {
		const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if(re.test(email)){
			let user = SignUps.findOne({"email": email})
			if(!user){
				SignUps.insert({
					email,
					createdAt: new Date(), // current time
				});
				return `Takk for interessen! Du er Tippser nummer ${SignUps.find().count()} 😄 Vi sender en epost så snart vi har mer info om Tipps!`;
			}
			return "Ingen grunn til å registrere seg to ganger! Epost-addressen finnes allerede 😉"
		}else{
			return "Wops! Epost-addressen er ugyldig...";
		}

	},

	helloMeteor: (arg, arg2) => {
		console.log(arg);
		console.log(arg2);
		return "Thank you very much";
	},

	getBeacons: (arg) => {
		console.log("getBeacons called! " + arg);
		console.log(Beacons.find().count());
		return Beacons.find().fetch();
	}
})
