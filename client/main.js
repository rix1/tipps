import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.feedbackForm.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.finished = new ReactiveVar(false);
    this.responseMsg = new ReactiveVar("");
});

Template.feedbackForm.helpers({
    counter() {
        return "";
    },

    finished() {
        return Template.instance().finished.get();
    },
    responseMsg(){
        return Template.instance().responseMsg.get();
    }
});

Template.feedbackForm.events({
    'click .resetBtn'(event, instance){
        instance.finished.set(false);
        instance.responseMsg.set("");
    },
    'submit .center-form'(event, instance){
        event.preventDefault();
        const target = event.target;
        let epost = target.emailField.value;

        Meteor.call('emailHandler', epost , (err, res) => {
            if (err) {
                console.log(err.reason);
                //   target.responseField.value = "FEEEEIL";
                console.log(err.reason);
                // instance.responseMsg.set(true);
                // instance.responseMsg.set(err.reason);

            } else {
                // $(event.target).text('reset');
                //   target.responseField.value = "Takk for interessen!<br>Du vil få en epost så snart vi har mer info om Tipps!";
                instance.responseMsg.set(res);
                instance.finished.set(!instance.finished.get())
                target.emailField.value = '';
                console.log("CLIENT: epost lagret");
            }
        });
    },
});
