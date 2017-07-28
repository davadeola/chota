import Ember from 'ember';

export default Ember.Component.extend({
  updatePortfolioForm: false,
  actions:{
    updatePortfolioForm(){
      this.set('updatePortfolioForm', true);
    },
    updatePortfolio(seller){
      var params = {
        email: this.get('email'),
        phone: this.get('phone'),
        description: this.get('description')
      };
      this.set('updatePortfolioForm', false);
      this.sendAction('updatePortfolio', seller, params)
    }
  }
});
