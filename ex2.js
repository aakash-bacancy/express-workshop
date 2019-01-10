const express=require('express');
const path=require('path');
const app=express();
app.use(express.static(process.argv[3] || path.join(_dirname,'public')));
app.listen(Number(process.argv[2]));