import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const {
  Controller
} = Ember;

const SAY_HI = function * () {
  yield timeout(3000);
  window.alert('Hi!');
};

export default Controller.extend({
  sayHi: task(SAY_HI),

  actions: {
    cancel() {
      this.get('sayHi').cancelAll();
    }
  }
});
