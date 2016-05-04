import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.feedbackForm.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.finished = new ReactiveVar(false);
});

Template.feedbackForm.helpers({
    counter() {
        return "";
    },

    finished() {
        return Template.instance().finished.get();
    }
});

Template.feedbackForm.events({
    'submit .center-form'(event, instance){
        event.preventDefault();
        const target = event.target;
        let epost = target.emailField.value;

        Meteor.call('emailHandler', epost , (err, res) => {
              if (err) {
                  console.log(err.reason);
              } else {
                  // $(event.target).text('reset');
                  console.log(instance.finished.get());
                  instance.finished.set(!instance.finished.get())
                  console.log(instance.finished.get());
                  target.emailField.value = '';
                  console.log("CLIENT: epost lagret");
              }
          });
    },
});
