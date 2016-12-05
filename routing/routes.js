// import the User model
var User = require("../models/user.js");
// end  
var bodyParser = require("body-parser");
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
  res.status(200).json({
      "response": req.body 
    });
});

module.exports = router;
