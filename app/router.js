import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('management');
  this.route('counter');
  this.route('canceling');
  this.route('state');
  this.route('generators');
});

export default Router;
