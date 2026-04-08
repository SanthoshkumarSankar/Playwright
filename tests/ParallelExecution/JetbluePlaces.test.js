import{test,expect} from "@playwright/test"

test("Jetblue Origin&Desination",async({page})=>{

    await page.goto("https://www-stg2.jetblue.com/");
    await page.getByRole('button',{name:'Roundtrip'}).click();
    await page.getByText('One-way').click();
    await page.getByPlaceholder('button',{name:'1 Adult'}).click();
    await page.locator('[increaselabel="add adult"] [jb-qa-id="increment-up"]').dblclick();
    await page.pause();
})