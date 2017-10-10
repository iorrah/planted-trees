import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('#modal-gallery').on('hide.bs.modal', function() {
      Ember.$('#modal-carousel .item.active').removeClass('active');
    });
  }
});
