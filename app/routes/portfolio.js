import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model(params){
    return this.store.find("seller" , params.seller_id);
  }


});
