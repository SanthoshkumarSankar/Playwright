
import{test,expect} from "@playwright/test"

test('Handle the ad in JetBlue',async({page})=>{
 
    await page.goto("https://www.jetblue.com/");
    
    page.on('dialog', async dialog =>{
      await dialog.dismiss();
        
    });

await page.pause();

});