
var middleware={
	requireAuthentication:function(req,res,next){
		console.log("middle ware authentication called");
		next();
	},
	logger:function(req,res,next){
		console.log("Request"+ new Date().toString() +' ' +req.method);
		next();
	}
};
module.exports=middleware;