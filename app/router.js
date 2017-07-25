import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('goods');

  this.route('portfolio', {path: "/seller/:seller_id"});
  this.route('signup');
  this.route('login');
  this.route('contact');
});

export default Router;
