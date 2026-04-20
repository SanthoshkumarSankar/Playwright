
import { expect,test } from "@playwright/test";

test("Check the Worldcup scorecard",async({page})=>{

  await page.goto("https://www.cricbuzz.com/");
  await page.locator('span.text-xs:has-text("T20 World Cup 2026")').first().click()
  await page.getByText('Scorecard').click();
  const score=await page.locator('#scard-team-304-innings-1').first().innerText();
  console.log(score)


}) 


