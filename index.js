//to take import
let h=require('./app')
console.warn(2+3) //to get output
let a=80
const b=80
if(a===b)//=== also checks data type with value
{
   console.log("matched") 
}
let c=[34,56,7]
console.log(c[1])
console.log(h.x)

console.log(h.k())
const fs=require('fs')//non global module to create and write file
fs.writeFileSync("helo.txt","code with me")
  