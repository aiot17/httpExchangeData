var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// app.set("view engine","ejs");
app.get("/",(req,res)=>{    
    var name = req.query.user
    var account = req.query.acc
    console.log(name," : ",account);
    res.send("got it!")
})
var server = app.listen(5000,()=>{
    console.log("node is running...")
})