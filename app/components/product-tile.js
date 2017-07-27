import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions:{
    update(product, params) {
      this.sendAction('update', product, params);
    },
    delete(product){
      if(swal("Are you sure you want to Delete this product?")){
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
