import assert from 'assert';

suite('my awesome website', function() {
  test('should test github', async function() {
    await browser.url('/'); // for base url see wdio.conf.js
    await browser.pause(2000);

    await browser.saveViewportScreenshot('screenShots/github-viewport.png');

    await browser.saveElementScreenshot('screenShots/github-files.png', '.file-wrap');
    await browser.saveElementScreenshot('screenShots/github-repo.png', '.repository-content', {
      hide: ['.repository-meta', '.overall-summary']
    });
  });

});
