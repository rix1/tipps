import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Beacons } from '../imports/api/collections';

// import './admin.html';
Template.adminPage.onCreated(function helloOnCreated() {
    // counter starts at 0
    // this.finished = new ReactiveVar(false);
    // this.responseMsg = new ReactiveVar("");
	var self = this;
	  self.autorun(function() {
	    // var postId = FlowRouter.getParam('postId');
	    self.subscribe('beacons');
		Meteor.subscribe('beacons');
	  });

	  console.log(Beacons.find({}).fetch());

	  console.log("GUNNAR");

	// Meteor.subscribe('beacons');

    // Meteor.setTimeout(function () {
    //     $('body').css('opacity', '1');
    // }, 10);
});

Template.adminPage.helpers({
	post: function(){
		console.log("HEISNAN! helper");
		return [1,2,34,4,5];
	}
});

Template.adminPage.events({
    // 'click .resetBtn'(event, instance){
    //     instance.finished.set(false);
    //     instance.responseMsg.set("");
    // },
    // 'submit .center-form'(event, instance){
    //     event.preventDefault();
    //     const target = event.target;
    //     let epost = target.emailField.value;
	//
    //     Meteor.call('emailHandler', epost , (err, res) => {
    //         if (err) {
    //             (err.reason);
    //             //   target.responseField.value = "FEEEEIL";
    //             (err.reason);
    //             // instance.responseMsg.set(true);
    //             // instance.responseMsg.set(err.reason);
	//
    //         } else {
    //             // $(event.target).text('reset');
    //             //   target.responseField.value = "Takk for interessen!<br>Du vil få en epost så snart vi har mer info om Tipps!";
    //             instance.responseMsg.set(res);
    //             instance.finished.set(!instance.finished.get())
    //             target.emailField.value = '';
    //         }
    //     });
    // },
});
