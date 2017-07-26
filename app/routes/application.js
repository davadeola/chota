import Ember from 'ember';

export default Ember.Route.extend({
    firebase: Ember.inject.service(),

  actions: {

       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
