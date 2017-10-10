import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  clssNames: ['gallery-item'],
  liked: false,
  isHidden: false,
  actions: {
    hearted() {
      this.$('.heart').toggleClass('is-active');

      if (this.get('liked')) {
        this.send('like');
      } else {
        this.send('deslike');
      }
    },
    like() {
      let tree = this.get('tree');
      var likes = tree.likes + 1;
      Ember.set(tree, 'likes', likes);
      this.set('liked', true);
    },
    deslike() {
      let tree = this.get('tree');
      var likes = tree.likes - 1;
      Ember.set(tree, 'likes', likes);
      this.set('liked', false);
    },
    toggleVisibility() {
      this.set('isHidden', !this.get('isHidden'));
    },
    showInModal(tree) {
      this.sendAction('showInModal', tree);
    }
  }
});
