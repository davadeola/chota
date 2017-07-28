import Ember from 'ember';

export default Ember.Component.extend({
  sortedReviews: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['price:desc'],
});
