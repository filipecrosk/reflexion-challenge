import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  groupedPain: computed('notifications.[]', function() {
    let sessions = this.get('notifications').filterBy('type','event_pain');
    let arr = {};
    
    sessions.forEach(function(item){
      if ( !arr[ item['therapy_session_id'] ] ){
        arr[ item['therapy_session_id'] ] = [];
      }

      if ( !arr[ item['therapy_session_id'] ].includes(item) ){
        arr[ item['therapy_session_id'] ].pushObject(item);
      }
    });

    return arr;
  }),

  groupedAssessment: computed('notifications.[]', function() {
    let sessions = this.get('notifications').filterBy('type','assessment_needs_review');
    let arr = {};
    
    sessions.forEach(function(item){
      if ( !arr[ item['patient_id'] ] ){
        arr[ item['patient_id'] ] = [];
      }

      if ( !arr[ item['patient_id'] ].includes(item) ){
        arr[ item['patient_id'] ].pushObject(item);
      }
    });

    return arr;
  }),

  groupedExerciseTrouble: computed.filterBy('notifications','type','exercise_trouble'),

  actions: {
    clearAll() {
      this.sendAction('clearAll');
    },

    removeItem(item) {
      this.sendAction('removeItem', item);
    },

    removeGroup(group) {
      this.sendAction('removeGroup', group);
    }
  }
});
