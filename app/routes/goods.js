import Ember from 'ember';

export default Ember.Route.extend({


  beforeModel: function(){
  console.log(this.get('session'));
  if(!this.get('session.isAuthenticated')){
    this.transitionTo('application');
  }
},

  model(){
    return this.store.findAll("product");
  },
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }

});
