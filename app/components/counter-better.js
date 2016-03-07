import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const {
  Component
} = Ember;

export default Component.extend({
  count: 0,

  init() {
    this._super(...arguments);
    this.get('incrementCount').perform();
  },

  incrementCount: task(function * () {
    this.incrementProperty('count');
    yield timeout(1000);
    this.get('incrementCount').perform();
  })
});
