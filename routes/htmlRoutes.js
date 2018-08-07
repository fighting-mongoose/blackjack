var path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {

        res.render('welcome');

    });

    app.get('/index', function (req, res) {

        res.render('index');
    })
}

