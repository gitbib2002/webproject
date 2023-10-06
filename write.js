const fs=require('fs');
const input=process.argv;//here process takes input from command line
fs.writeFileSync(input[2],input[3]) //cause input[1,0] takes the file path
