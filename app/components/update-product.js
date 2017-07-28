import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
actions:{
    update(product) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        quantity: this.get('quantity'),
        img: this.get('img')
      };

      this.sendAction('update', product, params);
    }
  }
});
