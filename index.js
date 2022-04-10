const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'images')));
const port = process.env.PORT;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views') )



app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.get('/about',(req,res)=>{
    res.send("under construction");
})
app.listen(port || 3000,()=>{
    console.log("connected");
})  