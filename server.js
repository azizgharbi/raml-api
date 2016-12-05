var express = require('express')
var osprey = require('osprey')
mongoose=require('mongoose')
var join = require('path').join
// connect to data
mongoose.connect('mongodb://localhost:27017/start-kit');
//
var User= require('./models/user.js');  // import the User model

var router = osprey.Router()

router.get('/users', function (req, res) {
  User.find({},function(err,obj){
  res.json(obj);
 })
})

osprey.loadFile(join(__dirname, 'api.raml'))
  .then(function (middleware) {
    var app = express()

    app.use('/v1', middleware, router)
    app.listen(3000, function () {

    console.log("Hi ! the server is running on port ");

    })
  })
