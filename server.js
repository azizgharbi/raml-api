"use strict";


var express = require("express");
var mongoose = require("mongoose");
var osprey = require("osprey");
var join = require("path").join;
var app = express();
// connect to data
mongoose.connect("mongodb://localhost:27017/start");
//static path
app.use('/public', express.static('bower_components'));
app.use('/web', express.static('web'));
app.use('/schemas', express.static('shemas'));
// get home statique page
app.get('/',function(req,res){     
     res.sendFile(__dirname + '/ressources/views/index.html');
});
//typescript
app.get('/typescript',function(req,res){     
     res.sendFile(__dirname + '/src/index.html');
});
//osprey load raml
osprey.loadFile(join(__dirname,"api.raml"))
.then(function (middleware) {

     try {
        app.use("/v1", middleware, require('./routing/routes'));
     } catch (error) {        
         console.log(error);
     };

    //start server
    app.listen(3000, function () {
        console.log("Hi ! the server is running");
    });
});
