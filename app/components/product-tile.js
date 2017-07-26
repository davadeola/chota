import Ember from 'ember';

export default Ember.Component.extend({
  sortedReviews: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['price:desc'],
  updateProductForm: false,
  actions:{
    update(product, params) {
      this.sendAction('update', product, params);
    }
  }
});
