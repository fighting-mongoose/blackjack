var path = require("path");
var db = require("../models")

module.exports = function (app) {
    app.get('/', function (req, res) {

        res.render('welcome');

    });

    app.get('/index', function (req, res) {
        console.log(req.body.user);
        // res.render('index')
        db.Player.findOne({
            where: {
                player_signed_in: true
            },
        }).then(function (gameData) {
            console.log(gameData);
            // res.json(gameData);
            res.render('index', { gameData });
        });


    });

    // app.get('/waitingRoom', function (req, res) {
    //     res.render('waitingRoom');
    // })
    app.get('/login', function (req, res) {
        res.render('login');
    })
    app.get('/signUp', function (req, res) {
        res.render('signUp');
    })
}

