import Ember from 'ember';

export default Ember.Component.extend({
  tree: null,
  actions: {
    like: function(tree) {
      this.sendAction('like', tree);
    },
    deslike: function(tree) {
      this.sendAction('deslike', tree);
    },
    showInModal: function(tree) {
      this.set('tree', null);
      Ember.$('#modal-carousel .item.active').removeClass('active');
      this.set('tree', tree);
      Ember.$('#modal-gallery').modal('show');
    }
  }
});
