
import{test,browser} from "@playwright/test"

test("Check box",async({page,browser})=>{

   await page.goto("https://letcode.in/test");
   await page.locator('a.card-footer-item[href="/radio"]').click();
   await page.locator('div.field:has-text("Find if the checkbox") .checkbox').uncheck();
   await page.locator('div.field:has-text("Accept the T&C") .checkbox').check();
   await page.pause();
});