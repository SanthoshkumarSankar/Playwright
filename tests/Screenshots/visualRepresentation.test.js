
import{test,expect} from "@playwright/test"
test("Visual representation", async({page})=>{

    await page.goto("https://www.thedrunkenmonkey.in/");
    await page.locator('a[data-testid="linkElement"] span:has-text("SmoothiesMenu")').click();
    await expect(page.getByText("So full of freshness, there's no room for preservatives.")).toBeVisible();
    await expect(page).toHaveScreenshot("drunkenMoneky.png");
    
});