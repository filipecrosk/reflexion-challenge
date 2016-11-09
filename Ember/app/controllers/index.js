import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  hasNotifications: computed.gt('model.length', 0),
  showNotifications: false,

  actions: {
    toggleNotifications() {
      this.toggleProperty('showNotifications');
    },

    clearAll() {
      this.get('model').clear();
      this.send('toggleNotifications');
    },

    removeItem(item) {
      console.log('log item', item);
      this.get('item');
      this.get('model').removeObject(item);
    },

    removeGroup(group) {
      console.log('log - removeGroup', group);
      let groupIds = group.mapBy('id');
      let model = this.get('model');
      console.log('log - ids to remove', groupIds);
      group.forEach(function(item) {
        console.log('log - item', item);
        model.removeObject(item);
      });
    }
  }
});
