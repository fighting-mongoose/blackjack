var path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {

        res.render('welcome');

    });

    app.get('/index', function (req, res) {

        res.render('index');
    })

    app.get('/waitingRoom', function (req, res) {
        res.render('waitingRoom');
    })
    app.get('/login', function (req, res) {
        res.render('login');
    })
    app.get('/signUp', function (req, res) {
        res.render('signUp');
    })
}

