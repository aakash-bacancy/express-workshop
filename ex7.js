const express=require('express');
const app=express()
const qs=require('querystring');
app.get('/search',function(req,res){
	res.send(req.query);
});
app.listen(Number(process.argv[2]))