import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  species_name: DS.attr('string'),
  image:        DS.attr('string'),
  likes:        DS.attr('number', { defaultValue: 0 }),
  liked:        DS.attr('boolean', { defaultValue: false }),
  is_hidden:    DS.attr('boolean', { defaultValue: true }),
  external_id:  Ember.computed('id', function() {
    return this.get('id').toLowerCase().dasherize();
  })
});
