import { test } from 'qunit';
import moduleForAcceptance from 'you-rockstar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Search Trees');

test('search-trees', function(assert) {
  visit('/');

  const TREE_NAME = 'red';
  let treeParagSelector = '.gallery-items a .caption.bottom p:contains(' + TREE_NAME + ')';
  let amountTrees = $('.gallery-items').find(treeParagSelector).length;

  fillIn('header .input-search', TREE_NAME);
  andThen(() => assert.equal(amountTrees, $('.gallery-items a').length));
});
