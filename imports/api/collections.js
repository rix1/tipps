import { Mongo } from 'meteor/mongo';

export const SignUps = new Mongo.Collection('SignUps');
export const Beacons = new Mongo.Collection('Beacons');

if (Meteor.isServer) {
	Meteor.publish('beacons', function beaconPublication() {
		return Beacons.find({});
	});
}
