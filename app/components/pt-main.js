import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  filters: {
    name: null,
    liked: null
  },
  filteredTrees: Ember.computed('filters.name', 'trees.@each', function() {
    let name = (this.get('filters.name') || '').toLowerCase();
    let trees = this.get('trees');

    if (name) {
      trees = trees.filter(function(e) {
        return (e.name.toLowerCase().indexOf(name) > -1) ||
               (e.species_name.toLowerCase().indexOf(name) > -1);
      });
    }

    return trees;
  })
});
