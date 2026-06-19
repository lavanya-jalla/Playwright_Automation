import { test, expect } from '@playwright/test';

test('Login Demo',async({page})=>{
   await page.goto('https://demo.applitools.com/');
//    await page.pause();
   await page.getByRole('textbox', { name: 'Enter your username' }).fill('Lavanya');
   await page.getByRole('textbox', { name: 'Enter your password' }).fill('Lava1234');
  await page.waitForSelector('text=Sign in', {
    timeout: 5000
});
    await page.getByRole('link', { name: 'Sign in' }).click();
})
test.only('Login demo 2', async ({page}) => {
    
   await page.goto('https://opensource-demo.orangehrmlive.com/');
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   await page.locator('span').filter({ hasText: 'k Verma' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click()

})
