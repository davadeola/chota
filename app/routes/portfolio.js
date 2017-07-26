import Ember from 'ember';
import swal from 'sweetalert';
export default Ember.Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model(params){
    return this.store.find("seller" , params.seller_id);
  },
  actions:{
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      params.seller.get('products').addObject(newProduct);
      newProduct.save().then(function () {
        return params.seller.save();
      });
      swal('Congrats your product has been saved');
      this.transitionTo('portfolio', params.seller);
    }
  }
  // saveReview(params) {
  //       var newReview = this.store.createRecord('review', params);
  //       var rental = params.rental;
  //       rental.get('reviews').addObject(newReview);
  //       newReview.save().then(function() {
  //         return rental.save();
  //       });
  //       this.transitionTo('rental', rental);
  //     }

});
