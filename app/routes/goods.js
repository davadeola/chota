import Ember from 'ember';

export default Ember.Route.extend({
  classNames: 'Example',
  setBySearchable: null,



  model(){
    return this.store.findAll("product");
  },
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    update(selection) {
      this.set('setBySearchable', selection);
    },
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();

    }
  }

});
