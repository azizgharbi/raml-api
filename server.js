"use strict";


var express = require("express");
var mongoose = require("mongoose");
var osprey = require("osprey");
var join = require("path").join;
var app = express();
// connect to data
mongoose.connect("mongodb://localhost:27017/start");

//osprey load raml
osprey.loadFile(join(__dirname,"api.raml"))
.then(function (middleware) {

     try {
        app.use("/v1", middleware, require('./routing/routes'));
     } catch (error) {        
         console.log(error);
     };

    //start server
    app.listen(3500, function () {
        console.log("Hi ! the server is running");
    });
});
