import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price:DS.attr('number'),
  description: DS.attr(),
  quantity:DS.attr(),
  img:DS.attr(),
  sold: DS.attr(),
  seller: DS.belongsTo('seller', {async: true})
});
