var express = require("express");

var router = express.Router();

// requiring burger models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//retrieve all burgers from the burgers table using sequelize findall method
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
//create a new burger using sequelize create method
  db.Burger.create({
    burger_name: req.body.burger_name
  }). then(function(data){
    res.redirect("/");
  })
});

// route to update the burger where I am setting devoured: true using the burgers id
router.put("/:id", function(req, res) {
  var id = req.params.id; 
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: id
    }
  }).then(function(data){    
  res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;




