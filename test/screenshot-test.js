
function screenshotName(filename) {
  const browserName = browser.desiredCapabilities.browserName;
  const re = new RegExp("(.+)\\.(png)", "g");
  return filename.replace(re, `$1-${browserName}.$2`);
}

suite('simple github test', function() {
  test('should test github', async function() {
    await browser.url('/'); // for base url see wdio.conf.js
    await browser.pause(2000);

    await browser.saveViewportScreenshot(screenshotName('screenshots/github-viewport.png'));

    await browser.saveElementScreenshot(screenshotName('screenshots/github-files.png'), '.file-wrap');

    await browser.saveElementScreenshot(screenshotName('screenshots/github-repo.png'), '.repository-content', {
      hide: ['.repository-meta', '.overall-summary']
    });

    await browser.saveDocumentScreenshot(screenshotName('screenshots/github-whole-page.png'));
  });

});
