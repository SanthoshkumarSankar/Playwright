import {test, browser} from "@playwright/test"


test("Radio Buttons in MABL",async({ browser, page })=> { 

await page.goto("https://sandbox.mabl.com/");
await page.getByText("radio buttons").click();
await page.locator('span:has-text("elaine benes")').click();
await page.getByText("submit");
await page.pause();

});

