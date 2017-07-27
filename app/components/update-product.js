import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        name: this.get('name1'),
        price: this.get('price1'),
        description: this.get('description1'),
        quantity: this.get('quantity1'),
        image: this.get('image1')
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
