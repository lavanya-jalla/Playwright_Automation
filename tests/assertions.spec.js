import{test,expect} from '@playwright/test';

test('Assertions',async({page})=>{
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    //Assertions
    //element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    const heading = page.getByRole('heading', { name: 'The Kitchen' });

if (await heading.isVisible()) {
    await heading.click();
}
//element hidden or visible
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

//element enabled or disabled
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

//checking the text
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('the kifchrb');

//attribute
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class',/.* css-dpmy2a/);

//url and title
await expect(page).toHaveURL('https://kitchen.applitools.com/');
await expect(page).toHaveTitle(/.*Kitchen/);

//screenshot
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveScreenshot();
})