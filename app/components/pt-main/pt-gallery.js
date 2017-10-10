import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function(tree) {
      this.sendAction('like', tree);
    },
    deslike: function(tree) {
      this.sendAction('deslike', tree);
    }
  }
});
