import Ember from 'ember';

const { 
  computed 
} = Ember;

export default Ember.Component.extend({
  patients: computed.mapBy('group', 'patient_name'),

  groupPain: computed.mapBy('group', 'pain_value'),
  highestPain: computed.max('groupPain'),

  actions: {
    removeItem() {
      this.sendAction('removeGroup', this.get('group'));
    },

    goToItem() {
      alert('Redirect user to another page');
    }
  }
});
