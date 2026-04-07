import { test } from "@playwright/test";

test("Ibaco window + dropdown", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.ibaco.in/");
    const orderOnline = page.locator('[href="/order-online/nearest.php"]');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        orderOnline.click()
    ]);
    
    await newPage.locator('select#colorselector.dropdown').selectOption({ value:"tn" });
    await newPage.locator('select#colorselector.chennai').selectOption({ label:'Saravanampatti' });
    await newPage.pause();
});
