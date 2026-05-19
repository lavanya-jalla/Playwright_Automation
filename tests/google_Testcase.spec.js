import { test, expect } from '@playwright/test';
test('Google Search', async ({ page })=>{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    await page.locator('input[name="q"]').fill('Playwright');
})