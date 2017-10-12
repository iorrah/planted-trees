import { test } from 'qunit';
import moduleForAcceptance from 'planted-trees/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Open Homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
