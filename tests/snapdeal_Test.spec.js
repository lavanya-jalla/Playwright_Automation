import { test, expect } from '@playwright/test';

test('snapdeal testing',async ({}) => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.snapdeal.com/');
  await page.getByText('Home & Kitchen', { exact: true }).click();
  await page.getByText('Kitchen Tools').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lyon Classic Potato Chopper & Mandoline Slicer – Pack of 1 Lyon Classic Potato' }).click();
  const page1 = await page1Promise;
  await page1.getByText('add to cart').click();
  await page1.locator('i').filter({ hasText: '1' }).click();
  await page1.getByRole('button', { name: 'PROCEED TO PAY Rs.' }).click();
  await page1.locator('iframe').nth(1).contentFrame().locator('#header-1cc').getByRole('button').click();
  await page1.locator('iframe').nth(1).contentFrame().getByText('Yes, cancel').click();
  await page1.locator('.icon-font-grey-size24 > .sd-icon').first().click();
  await page1.close();
  await page.close();

 
  await context.close();
  await browser.close();
});