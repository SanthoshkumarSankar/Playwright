
import{ test,expect } from "@playwright/test"

test('Handle Dropdown',async({ browser, page })=>{

await page.goto("https://letcode.in/test");
await page.locator('[href="/dropdowns"]').click();
await page.locator('#fruits').selectOption('3');
await page.locator('#superheros').selectOption('The Avengers');


//This below once works only if user can options to select multiple options
/*await page.locator('#superheros').selectOption([
  { label: 'The Avengers' },
  { label: 'Captain America' },
  { label: 'Iron Man' }
]);
*/
//await page.locator('#superheros').selectOption(['The Avengers','Captain America','Iron Man']);

await page.locator('#lang').selectOption({label: 'Python'});
await page.pause();



});