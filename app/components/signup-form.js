import Ember from 'ember';

export default Ember.Component.extend({
  validate: {
    form: {
      // The form property we should be evaluating here is name
      name: {
        required: true,

        // Your defined basic default error message
        message: 'Name error',
        // A more specific message tailored to the 'required' test
        requiredMessage: 'You must enter a name'
      },
      phone: {
        required: true,

        // Your defined basic default error message
        message: 'Phone number error',
        // A more specific message tailored to the 'required' test
        requiredMessage: 'You must enter a phone number'
      },
      password: {
        required: true,

        // Your defined basic default error message
        message: 'Name error',
        // A more specific message tailored to the 'required' test
        requiredMessage: 'You must enter a password'
      },
      email: {
        required: true,

        // Your defined basic default error message
        message: 'Name error',
        // A more specific message tailored to the 'required' test
        requiredMessage: 'You must enter an email address'
      },

    }
  },

  actions:{
    signUp(){
      var params={
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),
        phone: this.get('phone'),
        location: this.get('location'),
        description: this.get('description'),
        image : this.get('image')

      };
      this.sendAction('signUp', params);
      
    }
  }
});
