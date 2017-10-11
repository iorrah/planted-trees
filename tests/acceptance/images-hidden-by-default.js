import { test } from 'qunit';
import moduleForAcceptance from 'you-rockstar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Images Hidden by Default');

test('images-hidden-by-default', function(assert) {
  visit('/');
  let items = $('.gallery-items a');

  let hiddenImgs = items.filter(function() {
    return $(this).find('.tree').css('opacity') === '0';
  });

  andThen(() => assert.equal(items.length, hiddenImgs.length));
});
