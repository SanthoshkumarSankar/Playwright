import{test,expect} from "@playwright/test"

test("Download",async({page})=>{

    await page.goto("https://demoqa.com/upload-download");
    const [download]= await Promise.all([
     page.waitForEvent('download'),
     page.locator('#downloadButton').click()
]);
  
   await download.saveAs('tests/testData/Naurto.pdf'); 
   const filename=await download.suggestedFilename();
   console.log(filename);

   //suggestedFilename() returns the file name that the SERVER suggests to the browser.

// Shop gives you a parcel
// Parcel label says “Invoice_2025.pdf”
// You put it in a folder and rename it to “report.pdf”
   
});