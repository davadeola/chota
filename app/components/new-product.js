import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveProduct(){
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        quantity: this.get('quantity'),
        img:this.get('img')
      };
      this.sendAction('saveProduct', params);
    }
  }
});
