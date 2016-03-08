import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('management');
  this.route('counter');
  this.route('cancelling');
  this.route('state');
});

export default Router;
