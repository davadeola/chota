import Ember from 'ember';

export default Ember.Component.extend({

  updateProductForm: false,
actions:{
  updateProductForm(){
    this.set('updateProductForm', true);
  },
    update(product){
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        quantity: this.get('quantity'),
        img: this.get('img')
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
