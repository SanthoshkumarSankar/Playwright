
import{test,expect} from "@playwright/test"

test("File upload",async({page})=>{

await page.goto("https://demoqa.com/upload-download");
await page.waitForLoadState();

//await page.locator('#uploadFile').setInputFiles("c:/Users/Santhoshkumar.Sankar/Pictures/Screenshots/San.png");
await page.setInputFiles('#uploadFile','tests/testData/Naurto.pdf');
await page.pause();


});
 //scroll down

//await page.locator('#uploadFile').scrollIntoViewIfNeeded();
//await page.mouse.wheel(0, 1000);