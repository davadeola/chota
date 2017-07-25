import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
   search: {
     refreshModel: true
   }
 },
  model:function(params){
    return this.store.findAll("product", params);
  },
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
