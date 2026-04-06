
import {browser, test} from "@playwright/test"

test("Check box in amazon",async({page,browser})=>{

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=18163677119459518972&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9179966&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1");
    await page.getByRole('button',{ name : 'Open All Categories Menu' }).click();
    await page.locator('[data-menu-id="10"]').first().click();
    await page.getByRole('link', { name: 'T-shirts & Polos' }).last().click();
    await page.getByLabel('Single Cuff').check();
    await page.locator('div:has-text("Angle Cut Cuff")').first().check();
    
}); 