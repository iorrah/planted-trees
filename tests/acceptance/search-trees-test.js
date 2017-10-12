import { test } from 'qunit';
import moduleForAcceptance from 'planted-trees/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | Search Trees');

test('search trees', function(assert) {
  assert.expect(2);
  var done = assert.async();

  visit('/').then(function() {
    const TREE_NAME = 'red';

    var trees = $('.gallery-items a').filter(function() {
      var indexOfTreeName = $(this).find('.caption.bottom p')
                                   .text()
                                   .toLowerCase()
                                   .indexOf(TREE_NAME);

      return indexOfTreeName > -1;
    });

    var assertion = 'jquery found 2x items that match the filter criteria';
    assert.equal(trees.length, 2, assertion);

    fillIn('header .search-input', TREE_NAME);

    andThen(() => {
      Ember.run.later(this, function() {
        var assertion = 'the app has 2x items that match the filter criteria';
        assert.equal($('.gallery-items a').length, 2, assertion);
        done();
      }, 1000);
    });

  });
});
