var express = require('express');
var app = express();
var fs = require('fs');

app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "user.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var post  = server.address().port
    console.log("Rest API demo app listening at http://%s:%s", host, port)
})







