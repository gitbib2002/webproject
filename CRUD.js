///CRUD create read update delete operation
const c=require('fs');//to load file operation system
c.mkdirSync("bibek");//to create any folder
c.writeFileSync('bibek/bio.txt',"My name")//to create file on bibek folder
c.appendFileSync('bibek/bio.txt'," adding data");//first parameter to directory and second parameter to give data to append
let a=c.readFileSync('bibek/bio.txt',"utf-8")//path to read data
//and utf 8 to convert in normal text from that buffer value
console.log(a);
//it return  a buffer data so we need to encode it
c.renameSync('bibek/bio.txt','bibek/Mybio.txt')//to rename it
c.writeFileSync('bibek/hemlo.txt',"heres the file")
c.unlinkSync('bibek/hemlo.txt')//to delete that file
c.rmdirSync("bibek")//to delete any folder 
//in sync step by step lines are executed