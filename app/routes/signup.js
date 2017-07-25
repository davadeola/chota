import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';
import swal from 'sweetalert';

export default Ember.Route.extend(formValidation,{

  actions:{
    signUp(params){
      var newsignUp = this.store.createRecord('seller', params);
      newsignUp.save();
      // this.transitionTo('portfolio' ,seller.id);
      swal('Congrats! You have just signed up.');
      this.transitionTo('login');
    },
    // saveProduct(params){
    //   var newProduct = this.store.createRecord('product', params);
    //   newProduct.save();
    // }
  }
});
