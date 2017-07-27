import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname:DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  image:DS.attr(),
  description: DS.attr(),

  products: DS.hasMany('product', {async:true}),

});
