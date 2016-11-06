var http = require('http')
var express = require('express')
var app = express()


app = app.get('/*',function (req, res) {
     res.end("Wrong adress")
})
  
var app = app.get('/api/whoami/',function (req, res) {
     res.end(JSON.stringify({
         ipaddress:req.headers['x-forwarded-for'],
         language:String(req.headers['accept-language']).split(",")[0],
         software:String(req.headers['user-agent']).split("(")[1].split(")")[0]
     }))
})


app.listen(process.env.PORT || 8080,function(){
      console.log("Started 8080")
})