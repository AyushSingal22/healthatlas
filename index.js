const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views') )
app.get('*',(req,res)=>{
    res.render('home.ejs');
})
app.listen('healthatlas-c1e3sua2c-optimus2703.vercel.app',()=>{
    console.log("connected");
})