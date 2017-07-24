import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  password:DS.attr(),
  location:DS.attr(),
  description:DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  image:DS.attr(),
  products: DS.hasMany('product', {async:true}),
});
