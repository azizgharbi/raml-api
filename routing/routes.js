// import the User model
var User = require("../models/user.js");
// end  
var bodyParser = require("body-parser");
var osprey = require("osprey");
var router = osprey.Router();
var Ajv = require('ajv');
var ajv = new Ajv();
router.use(bodyParser.json());



// get users
router.get("/users", function (req, res) {
    User.find({}, function (err, obj) {
        res.json(obj);
    });
});


// post user
router.post("/add", function (req, res) {

var user = new User({name: req.body.name,email: req.body.email});
/*var schema = {
  "properties": {
    "name": { "type": "string"},
    "email": { "type": "string", "pattern": "^\\S+@\\S+$"}
  }
};*/
let schema = require("../shemas/users");
let valid = ajv.validate(schema, user);

if (!valid) {console.log(ajv.errorsText());}
else{user.save(); console.log("it's work");}

  res.status(200).json({"response": req.body });
});

module.exports = router;
