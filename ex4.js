const express=require('express');
const bodyparser=require('body-parser');
const app=express()
app.use(bodyparser.urlencoded({extended:false}));
app.post('/form',function(request,response){
	console.log(request.body.str);
	response.end(request.body.str.split('').reverse().join(''));
});
app.listen(Number(process.argv[2]));