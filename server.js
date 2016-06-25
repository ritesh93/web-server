var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var middleware=require('./middleware.js');
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res,next){
	res.send("about us");
});


app.use(express.static(__dirname+'/public'));
app.listen(port,function(){
	console.log("express server started at port :"+port);
});