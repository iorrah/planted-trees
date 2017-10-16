import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleLike(tree) {
      this.sendAction('toggleLike', tree);
    }
  }
});
