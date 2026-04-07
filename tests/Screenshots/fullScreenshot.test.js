import{test,expect} from "@playwright/test"

test("Fullpage screenshot",async ({page})=>{

    await page.goto("https://www.thedrunkenmonkey.in/");
    await page.locator('a[data-testid="linkElement"] span:has-text("SmoothiesMenu")').click();
    await expect(page.getByText("So full of freshness, there's no room for preservatives.")).toBeVisible();
    await page.screenshot({path:'drunkenMoneky.png',fullPage: true});
});