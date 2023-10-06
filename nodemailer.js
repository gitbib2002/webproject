const mailer=require('./sendmailer');
const exp=require('express');
const a=exp();//to get express object
a.get("/",(req,res)=>{
    res.send("<h1>I am back</h1>")
})//work when gets get request of that parameter 1 like /about and then parameter run a request to give responce
a.get("/sendmail",mailer);
a.listen(5000);

