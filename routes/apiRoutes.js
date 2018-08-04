var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {

    res.render('welcome');

});

router.get('/index', function (req, res) {

    res.render('index');
})

module.exports = router;