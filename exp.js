const exp= require('express');
const a=exp();
a.get('',(req,res)=>{
   res.send('<h1>hello here</h1>')   

});

a.get('/about',(req,res)=>{
    res.send('<h1>this is about page</h1>')   
 
 });
 a.listen(5000);
