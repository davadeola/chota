import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions :{
    removeProduct(item){
      this.get('shoppingCart').remove(item);
    }
  },
  totalCosts:0,
  totalCost:Ember.computed('shoppingCart.items.@each.price',function(){

   return this.get('shoppingCart.items').reduce(function(sum,item){

     return sum += parseInt(item.get('price'));

   },0);
 }),
});
