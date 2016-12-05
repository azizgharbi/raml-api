"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var join = require("path").join;
// connect to data
mongoose.connect("mongodb://localhost:27017/start");
//models
var User = require("./models/user.js");  // import the User model
//bodyParser

var osprey = require("osprey");

var router = osprey.Router();
router.use(bodyParser.json());

// get
router.get("/users", function (req, res) {
    User.find({}, function (err, obj) {
        res.json(obj);
    });
});

// post
router.post("/add", function (req, res) {
    console.log(req.body.name);
});


osprey.loadFile(join(__dirname, "api.raml"))
    .then(function (middleware) {
        var app = express();

        app.use("/v1", middleware, router);
        app.listen(3000, function () {

            console.log("Hi ! the server is running on port ");

        });
    });
