const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const pixelmatch = require('pixelmatch');
const expect = require('chai').expect;
const {startServer} = require('polyserve');
const PNG = require('pngjs').PNG;

const testDir = `tests/visual`;
const screenshotDir = `tests/visual/screenshots`;

describe('implementation visually matches original bootstrap', function() {
  let polyserve, browser, page;

  // This is ran when the suite starts up.
  before(async function() {
    // This is where you would substitute your python or Express server or whatever.
    polyserve = await startServer({port:4000, root:path.join(__dirname, '..'), moduleResolution:'node'})

    // Create the test directory if needed.
    if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);
  });

  // This is ran when the suite is done. Stop your server here.
  after((done) => polyserve.close(done));

  // This is ran before every test. It's where you start a clean browser.
  beforeEach(async function() {
    browser = await puppeteer.launch();
    page = await browser.newPage();
		page.setViewport({width: 1024, height: 768});
  });

  // This is ran after every test; clean up after your browser.
  afterEach(() => browser.close());

	it('Buttons', async function() {
		return takeAndCompareScreenshot(page, 'button');
  });

	it('Badges', async function() {
		return takeAndCompareScreenshot(page, 'badge');
	});

	it('Alerts', async function() {
		return takeAndCompareScreenshot(page, 'alert');
	});
});

// - page is a reference to the Puppeteer page.
// - route is the path you're loading
async function takeAndCompareScreenshot(page, route) {
	const filePath = `${screenshotDir}/${route}.png`;
	const filePathUpstream = `${screenshotDir}/${route}_upstream.png`;
	const filePathDiff = `${screenshotDir}/${route}_diff.png`;

	// take rebuild screenshot
	await page.goto(`http://127.0.0.1:4000/${testDir}/${route}.html`);
	await page.screenshot({path: filePath, fullPage: true});

  // take upstream screenshot
  await page.goto(`http://127.0.0.1:4000/${testDir}/${route}_upstream.html`);
  await page.screenshot({path: filePathUpstream, fullPage: true});

  // Test to see if it's right.
  return compareScreenshots(filePath, filePathUpstream, filePathDiff);
}

function compareScreenshots(file1, file2, diffPath) {
  return new Promise((resolve, reject) => {
    const img1 = fs.createReadStream(file1).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(file2).pipe(new PNG()).on('parsed', doneReading);

    let filesRead = 0;
    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) return;

      // The files should be the same size.
      expect(img1.width, 'image widths are the same').equal(img2.width);
      expect(img1.height, 'image heights are the same').equal(img2.height);

      // Do the visual diff.
      const diff = new PNG({width: img1.width, height: img1.height});
      const numDiffPixels = pixelmatch(
          img1.data, img2.data, diff.data, img1.width, img1.height,
          {threshold: 0.15});

			// write the diff
			diff.pack().pipe(fs.createWriteStream(diffPath));

      // The files should look the same.
      expect(numDiffPixels, 'number of different pixels').equal(0);
      resolve();
    }
  });
}
