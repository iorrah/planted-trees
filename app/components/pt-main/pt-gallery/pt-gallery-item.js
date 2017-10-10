import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  clssNames: ['gallery-item'],
  actions: {
    toggleLike() {
      this.sendAction('toggleLike', this.get('tree'));
    },
    toggleVisibility() {
      this.set('tree.is_hidden', !this.get('tree.is_hidden'));
    },
    showInModal(tree) {
      this.sendAction('showInModal', tree);
    }
  }
});
