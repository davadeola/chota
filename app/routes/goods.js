import Ember from 'ember';

export default Ember.Route.extend({


  

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
