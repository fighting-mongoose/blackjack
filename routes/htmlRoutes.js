var path = require("path");
var express = require("express");
var router = express.Router();
console.log("Is the server hitting html routes?")

router.get('/', function (req, res) {
    console.log("Can you hear me now??")
    var hbsObject = {
        cats: "hrll"
    };
    res.render('welcome');

});

// app.get('/index', function (req, res) {

//     res.render('index');
// })
module.exports = router;

