import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  clssNames: ['gallery-item'],
  liked: false,
  desliked: false,
  treeImageSrc: Ember.computed('tree.is_img_shown', function() {
    var src, tree = this.get('tree');

    if (tree.is_img_shown) {
      src = tree.image;
    } else {
      src = 'assets/images/gallery/placeholder.jpg';
    }

    return src;
  }),
  didInsertElement: function() {
    if (this.get('tree.modal_shown')) {
      this.send('showInModal', this.get('tree'));
    }
  },
  actions: {
    like: function(tree) {
      if (!this.get('liked')) {
        var likes = tree.likes + 1;
        Ember.set(tree, 'likes', likes);

        if (tree.deslikes) {
          var deslikes = (tree.deslikes - 1);
          Ember.set(tree, 'deslikes', deslikes);
        }

        Ember.set(tree, 'is_img_shown', true);

        this.set('liked', true);
        this.set('desliked', false);
      }
    },
    deslike: function(tree) {
      if (!this.get('desliked')) {
        var deslikes = tree.deslikes + 1;
        Ember.set(tree, 'deslikes', deslikes);

        if (tree.likes) {
          var likes = (tree.likes - 1);
          Ember.set(tree, 'likes', likes);
        }

        Ember.set(tree, 'is_img_shown', false);

        this.set('desliked', true);
        this.set('liked', false);
      }
    },
    showInModal: function(tree) {
      this.sendAction('showInModal', tree);
    }
  }
});
