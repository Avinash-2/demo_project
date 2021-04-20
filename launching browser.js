const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless:false});
  const page = await context.newPage();
  page.goto("https://www.google.co.in/")
  page.fill('github');
  await browser.close();
})();