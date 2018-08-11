var path = require("path");
var db = require("../models")

module.exports = function (app) {
    app.get('/', function (req, res) {

        res.render('welcome');

    });

<<<<<<< HEAD
    app.get('/index', function (req, res) {
        console.log(req.body.user);
=======
    app.get('/index/:id', function (req, res) {

>>>>>>> d0e29d6ee8b7ece2952e9b14801fb2e466814ea2
        // res.render('index')
        db.Player.findOne({
            where: {
                id: req.params.id
            },
        }).then(function (gameData) {
            console.log(gameData.dataValues);
            gameData2 = gameData.dataValues;
            // res.json(gameData);
            res.render('index', {gameData2});
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

