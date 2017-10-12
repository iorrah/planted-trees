import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tree', 'Unit | Model Tree | External ID', {
  needs: []
});

test('should return a lower case & dasherized version of the tree name', function(assert) {
  const TREE_NAME = 'Japanese red pine';
  let tree = this.subject({ id: TREE_NAME, name: TREE_NAME });
  assert.equal(tree.get('external_id'), TREE_NAME.toLowerCase().dasherize());
});
