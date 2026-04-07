import { test, expect } from "@playwright/test";

test("Full page + product quick view screenshot", async ({ page }) => {

  await page.goto("https://frozenbottle.com/");
  await expect(page.getByRole('link', { name: /products|shop/i }).first()).toBeVisible();
  await page.screenshot({ path: 'screenshot.png'});

  const productCard = page.locator('a[href="/collections/frozen-bottle/products/choco-hazelnut-bubble-tea"]');
  await productCard.scrollIntoViewIfNeeded();
  await expect(productCard).toBeVisible();
  await productCard.hover();


  const quickView = productCard.getByText('Quick view');
  await expect(quickView).toBeVisible();
  await quickView.click();
  await page.screenshot({ path: 'hazelnut-bubble-tea.png' });

});
