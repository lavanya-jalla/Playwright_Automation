import{test,expect,chromium} from '@playwright/test';
test('Slow Motion and Video Recording',async()=>{
    const browser = await chromium.launch({
        slowMo: 1000, 
        headless: false,
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/', 
            size: {width: 900,height: 700}
        }
    });
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
     
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   
   await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
       
 await page.getByRole('menuitem', { name: 'Logout' }).waitFor({ state: 'visible' });
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.close();

})