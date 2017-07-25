import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';
import swal from 'sweetalert';
import Firebase from 'firebase';

export default Ember.Route.extend(formValidation,{
  firebaseApp: Ember.inject.service(),
  actions:{
    signUp(){
      var controller = this.get('controller');
      var firstName = controller.get('firstName');
      var lastName = controller.get('lastName');
      var email = controller.get('email');
      var password = controller.get('password');
      var phone = controller.get('phone');
      var ref = this.get('firebaseApp').auth();
      var _this = this;

      ref.createUserWithEmailAndPassword(email, password).then((userData) => {
        var user = this.get('store').createRecord('seller', {
          id: userData.uid,
          firstname: firstName,
          lastname: lastName,
          email: email,
          phone:phone
        });
        user.save()
        .then(() =>{
          swal('Congrats! You have just signed up.');
          this.transitionTo('index');
        });
      });
    }



//
// var newsignUp = this.store.createRecord('seller', params);
// newsignUp.save();
// // this.transitionTo('portfolio' ,seller.id);
// swal('Congrats! You have just signed up.');
//
//
//
//
// this.transitionTo('login');
//},

}
});
