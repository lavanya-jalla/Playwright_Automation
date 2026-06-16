// @ts-check
import { test, expect } from '@playwright/test';
let context;
let page;
test.beforeAll(async ({ browser}) => {
  context = await browser.newContext();
  await context.tracing.start(
    {
    screenshots: true,
     snapshots: true
  });
  page=await context.newPage();
});

test('home page has playwright title', async ({ page, context }) => {
  // await context.tracing.start(
  //   {
  //   screenshots: true,
  //    snapshots: true
  // });
  await page.goto('https://playwright.dev/');

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test.afterAll(async ({ context }) => {
    await context.tracing.stop({ path: 'test2_trace.zip' });
  });

  await page.goto('https://playwright.dev/');

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // await context.tracing.stop({ path: 'test1_trace.zip' });

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  })
});
