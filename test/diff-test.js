import assert from 'assert';

const widths = [1024, 1600];

function assertDiff(results) {
  results.forEach((result) => assert.ok(result.isExactSameImage));
}

suite('simple github test', function() {
  test('file-wrap', async function() {
    await browser.url('/'); // for base url see wdio.conf.js
    await browser.pause(2000);

    const report = await browser.checkElement('.file-wrap', {
      widths
    });
    assertDiff(report);
  });

  test('visible-area', async function() {
    await browser.url('/'); // for base url see wdio.conf.js
    await browser.pause(2000);

    const report = await browser.checkViewport({
      widths: widths

    });
    assertDiff(report);
  });

  test('whole-page', async function() {
    await browser.url('/'); // for base url see wdio.conf.js
    await browser.pause(2000);

    const report = await browser.checkDocument({
      widths: widths
    });
    assertDiff(report);
  });

});
