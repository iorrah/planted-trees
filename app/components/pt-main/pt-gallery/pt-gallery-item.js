import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  clssNames: ['gallery-item'],
  didInsertElement() {
    this.send('setItemHeight', this.get('tree.external_id'));
  },
  actions: {
    toggleLike() {
      this.sendAction('toggleLike', this.get('tree'));
    },
    toggleVisibility() {
      this.set('tree.is_hidden', !this.get('tree.is_hidden'));
    },
    showInModal(tree) {
      this.sendAction('showInModal', tree);
    },
    setItemHeight(externalId) {
      this.sendAction('setItemHeight', externalId);
    }
  }
});
