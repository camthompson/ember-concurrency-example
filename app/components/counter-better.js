import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  Component,
  RSVP,
  run
} = Ember;

export default Component.extend({
  count: 0,

  init() {
    this._super(...arguments);
    this.get('incrementCount').perform();
  },

  incrementCount: task(function * () {
    this.incrementProperty('count');

    yield new RSVP.Promise(function(resolve) {
      run.later(() => resolve(), 1000);
    });

    this.get('incrementCount').perform();
  })
});
