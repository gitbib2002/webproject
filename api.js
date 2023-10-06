const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});//here 200 code for api
    res.write(JSON.stringify([{name : 'anil',email : 'dgh.com'},
                              {name : 'peter',email : 'dgh.com'},
                              {name : 'roy',email : 'dgh.com'}]//key and value pair and {} to create object and [] to create array

    ))
    res.end();

}).listen(4000);