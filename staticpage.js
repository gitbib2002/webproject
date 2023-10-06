const exp=require('express')
var requests = require('requests');

requests("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=00c80774cd470acc0e7452ca3e8a07f1")
.on('data',(chunk)=> {
    const c=JSON.parse(chunk)
    console.log(c.weather[0].main)
    console.log(c.weather[0])
    console.log(c.main.temp)
    
    
})
