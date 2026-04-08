
import fs from 'fs/promises'

const data=await fs.readFile('C:/Users/Santhoshkumar.Sankar/Downloads/sample1.json','utf-8');
const raw = JSON.parse(data);
console.log(raw.fruit)
