import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const {
  Controller
} = Ember;

const SAY_HI = function * () {
  yield timeout(1000);
  window.alert('Hi!');
};

export default Controller.extend({
  sayHi: task(SAY_HI),
  restartable: task(SAY_HI).restartable(),
  enqueue: task(SAY_HI).enqueue(),
  drop: task(SAY_HI).drop()
});
