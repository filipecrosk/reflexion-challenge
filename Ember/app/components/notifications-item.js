import Ember from 'ember';

const { 
  computed 
} = Ember;

export default Ember.Component.extend({
  iconType: computed('notification.type', function() {
    let type = this.get('notification.type');
    switch ( type ) {
      case 'assessment_needs_review':
        return 'pencil-square-o';
      case 'exercise_trouble':
        return 'info';
      case 'event_pain':
        return 'exclamation-triangle';
      default:
        return 'info';
    }
  }),

  actions: {
    removeItem() {
      this.sendAction('removeItem', this.get('notification'));
    },

    goToItem() {
      alert('Redirect user to another page');
    }
  }
});
