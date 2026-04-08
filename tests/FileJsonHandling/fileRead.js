
import fs from 'fs/promises'
const data=await fs.readFile("C:\\Users\\Santhoshkumar.Sankar\\Desktop\\output.txt", 'utf-8');
console.log(data);