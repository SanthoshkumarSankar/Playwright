
import fs from "fs/promises"

let userJson={
  
    Captain:"Steve Rogers",
    IronMan:"Tony Stark",
    Thor:"Chris"    
}

await fs.writeFile('./data.json',JSON.stringify(userJson,null, 2));

const jsonData=await fs.readFile('./data.json', 'utf-8');
console.log(jsonData)
