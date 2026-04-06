import { test, expect } from '@playwright/test';

test.only('KFC first test', async ({ browser, page }) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();

  await page.goto("https://online.kfc.co.in/",);
  await page.getByText("EPIC BUCKET OF THE DAY").click();
  await page.getByRole('button', { name: 'Add to cartAll Chicken Box' }).click();

  var textAssert = await page.getByTestId("view-modal-title").innerText();
  await expect(textAssert).toContain("START YOUR ORDER");
  console.log(textAssert);
});

