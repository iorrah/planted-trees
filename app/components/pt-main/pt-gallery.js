import Ember from 'ember';

export default Ember.Component.extend({
  tree: null,
  actions: {
    toggleLike(tree) {
      if (tree.get('liked')) {
        this.send('deslike', tree);
      } else {
        this.send('like', tree);
      }
    },
    like(tree) {
      tree.incrementProperty('likes');
      Ember.set(tree, 'liked', true);
    },
    deslike(tree) {
      tree.decrementProperty('likes');
      Ember.set(tree, 'liked', false);
    },
    showInModal(tree) {
      Ember.set(this, 'tree', tree);
      Ember.$('#modal-carousel .item.active').removeClass('active');

      let id = tree.get('external_id');
      let selector = '#modal-carousel .carousel-inner #item-' + id;

      Ember.$(selector).addClass('active');
      Ember.$('#modal-gallery').modal('show');
    }
  }
});
