import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('goods');
  this.route('welcome');
  this.route('portfolio', {path: ":seller_id"});
  this.route('signup');
  this.route('login');
  this.route('contact');
  this.route('look-up',  {path: "look-up/:seller_id"});
});

export default Router;
