import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions:{
    update(product, params) {
      this.sendAction('update', product, params);
    }
  }
});
