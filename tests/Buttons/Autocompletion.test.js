
import { browser, test } from "@playwright/test"

test('KFC Order', async ({ browser, page }) => {

    await page.goto("https://online.kfc.co.in/");
    await page.getByText("BURGERS").click();
    await page.getByTestId("add-to-cart-D-K696").click();
    await page.getByTestId("disposition-order-click-handler-Disposition - Dine in").click();
    await page.getByTestId("store-search-input").fill("Chennai");
    await page.getByTestId('suggestionlist-id').waitFor(/Beach Station/i);
    await page.getByText(/Beach Station/i).click();
    await page.locator('div.store-card:has(span.card-store-name:has-text("KFC Egmore")) button[data-testid="order-now"]').click();
    await page.pause();
});




