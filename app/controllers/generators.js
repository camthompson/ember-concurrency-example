import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  Controller,
  RSVP
} = Ember;

export default Controller.extend({
  success: task(function * () {
    let value = yield new RSVP.Promise(function(resolve) {
      resolve('Success!');
    });
    alert(value);
  }),

  failure: task(function * () {
    try {
      yield new RSVP.Promise(function(resolve, reject) {
        reject('FAILED!');
      });
    } catch(e) {
      alert(e);
    }
  })
});
