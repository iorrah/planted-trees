import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function(tree) {
      this.sendAction('like', tree);
    },
    deslike: function(tree) {
      this.sendAction('deslike', tree);
    },
    showInModal: function(tree) {
      Ember.$('#modal-gallery').modal('show');
      this.set('tree', tree);
    }
  }
});
