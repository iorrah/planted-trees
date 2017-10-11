import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  didInsertElement() {
    this.startTooltips();
  },
  startTooltips() {
    $('[data-toggle="tooltip"]').tooltip();
  }
});
