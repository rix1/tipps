import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.body.events({
    'click .loginBtn'(event, instance){
        console.log("loginBtn Clikced");
    }
})

Template.feedbackForm.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.finished = new ReactiveVar(false);
    this.responseMsg = new ReactiveVar("");

    Meteor.setTimeout(function () {
        $('body').css('opacity', '1');
    }, 10);
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
                (err.reason);
                //   target.responseField.value = "FEEEEIL";
                (err.reason);
                // instance.responseMsg.set(true);
                // instance.responseMsg.set(err.reason);

            } else {
                // $(event.target).text('reset');
                //   target.responseField.value = "Takk for interessen!<br>Du vil få en epost så snart vi har mer info om Tipps!";
                instance.responseMsg.set(res);
                instance.finished.set(!instance.finished.get())
                target.emailField.value = '';
            }
        });
    },
});
