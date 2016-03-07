import Ember from 'ember';

const {
  Component,
  run
} = Ember;

export default Component.extend({
  count: 0,

  init() {
    this._super(...arguments);
    this.incrementCount();
  },

  incrementCount() {
    this.incrementProperty('count');
    run.later(() => this.incrementCount(), 1000);
  }
});
