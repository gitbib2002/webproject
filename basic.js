const http=require('http');


function datac(req,resp)
{
    resp.write("<h1>this is output2</h1>")
    resp.end();
}
http.createServer(datac).listen(4500);


