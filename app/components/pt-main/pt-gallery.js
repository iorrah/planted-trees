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
      var likes = tree.get('likes') + 1;
      Ember.set(tree, 'likes', likes);
      Ember.set(tree, 'liked', true);
    },
    deslike(tree) {
      var likes = tree.get('likes') - 1;
      Ember.set(tree, 'likes', likes);
      Ember.set(tree, 'liked', false);
    },
    showInModal(tree) {
      Ember.set(this, 'tree', tree);
      Ember.$('#modal-carousel .item.active').removeClass('active');

      let selector = '#modal-carousel .carousel-inner #item-'
                     + tree.get('external_id');

      Ember.$(selector).addClass('active');
      Ember.$('#modal-gallery').modal('show');
    }
  }
});
