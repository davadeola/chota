import Ember from 'ember';

export default Ember.Route.extend({
  classNames: 'Example',
  setBySearchable: null,
  // classNames: 'Example',
  // setBySearchable: null,



shoppingCart:Ember.inject.service(),
good: true,
  model(){
    return this.store.findAll("product");
  },

  actions: {
    /*
    addToCart(item) {
      this.set('sold', true);
      var sold = this.get('sold');

      if(sold!== true){
        this.set('good', false);
      }
      this.get('shoppingCart').add(item);
    },*/
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();

    },


    // update(selection) {
    //   this.set('setBySearchable', selection);
    // },
    // saveProduct(params){
    //   var newProduct = this.store.createRecord('product', params);
    //   newProduct.save();
    //
    // }

  }

});
