const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless:false});
  const page = await context.newPage();
  page.goto("https://www.google.co.in/");
  await page.keyboard.press('enter');
  await browser.close();
})();