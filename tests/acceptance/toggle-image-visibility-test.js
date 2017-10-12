import { test } from 'qunit';
import moduleForAcceptance from 'planted-trees/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | Toggle Image Visibility');

test('toggle-image-visibility', function(assert) {
  assert.expect(4);
  var done = assert.async();

  visit('/').then(function() {
    let item = $('.gallery-items > a:first-child');
    let hiddenImg = item.find('.tree');

    assert.equal(hiddenImg.length, 1, 'found one image');
    assert.equal(hiddenImg.css('opacity'), '0', 'the image is hidden');

    let toggler = item.find('.visibility button');
    assert.equal(toggler.length, '1', 'there is a visibility toggler');
    toggler.click();

    andThen(() => {
      var shownImg = $('.gallery-items > a:first-child .tree');

      andThen(() => {
        Ember.run.later(this, function() {
          assert.equal(shownImg.css('opacity'), '1', 'image becomes visible');
          done();
        }, 1000);
      });
    });
  });
});
