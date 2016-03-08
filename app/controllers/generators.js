import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  Controller
} = Ember;

export default Controller.extend({
  success: task(function * () {
    let value = yield new Promise(function(resolve) {
      resolve(5);
    });
    alert(value);
  }),

  failure: task(function * () {
    try {
      yield new Promise(function(resolve, reject) {
        reject('FAILED!');
      });
    } catch(e) {
      alert(e);
    }
  })
});
