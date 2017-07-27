import Ember from 'ember';

export default Ember.Component.extend({
  sortedReviews: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['price:desc'],
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
