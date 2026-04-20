
import{test,expect} from "@playwright/test"

test.describe.configure({mode:"parallel"});
test("Test No:1",async({page})=>{

 await page.goto("https://www.google.com/")
 await page.locator('#APjFqb').fill('Virat Kohli');
});

test("Test No:2",async({page})=>{
await page.goto("https://www.google.com/")
await page.locator('#APjFqb').fill('Rohit sharma')

})
test("Test No:3",async({page})=>{

await page.goto("https://www.google.com/")
await page.locator('#APjFqb').fill('MS Dhoni')

})