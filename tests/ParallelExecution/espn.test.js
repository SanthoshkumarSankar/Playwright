import{test,expect} from "@playwright/test"

test("Espn score",async({page})=>{

    await page.goto("https://www.espncricinfo.com")
    await page.locator('.ds-text-body-4:has-text("T20 World Cup")').first().click();
    await page.getByText('Scorecard').click();
})
