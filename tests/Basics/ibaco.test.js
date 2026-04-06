import { test, expect } from '@playwright/test';

test('Ibaco Ice-cream order',async({browser,page})=>
    {
  
    await page.goto('https://www.ibaco.in/');
    await expect(page).toHaveTitle("ibaco");
 
});


