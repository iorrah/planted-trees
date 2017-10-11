import { test } from 'qunit';
import moduleForAcceptance from 'you-rockstar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Toggle Image Visibility');

test('toggle-image-visibility', function(assert) {
  visit('/');
  let item = $('.gallery-items > a:first-child');
  var hiddenImg = item.find('.tree');
  andThen(() => assert.equal(hiddenImg.css('opacity'), '0') );
  item.find('.visibility button').click();
  var shownImg = item.find('.tree');
  andThen(() => assert.equal(shownImg.css('opacity'), '1') );
});
