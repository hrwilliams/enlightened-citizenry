import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislator');
  this.route('legislator-results', {path: '/legislator-results/:zip'});
});

export default Router;
