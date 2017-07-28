import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions:{
    update(product, params) {
      this.sendAction('update', product, params);
    },
    delete(product){
console.log(product);
var seller = this.get('seller');
      if(confirm("Are you sure you want to Delete this product?")){
        this.sendAction('delete',product, seller);

      }

    }
  }
});
