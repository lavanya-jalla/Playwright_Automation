import{test} from '@playwright/test';

// Annotations 
test.skip('Annotations and Tags',async({page})=>{
    
})
test('Not yet ready',async({page})=>{
    test.fail('This test is not yet ready');
})
test.fixme('Let me fix this',async({page})=>{

})
test('Slow the test',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
test.slow();
})
test('firefox', async ({ page, browserName }) => {
    await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
  test.skip(browserName === 'firefox', 'Still working on it');
});
//Tags
test('Smoke Test @smoke',async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/'); 
})