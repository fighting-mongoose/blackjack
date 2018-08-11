var db = require("../models");

module.exports = function (app) {

    app.post("/api/players", function (req, res) {
        db.Player.create(req.body).then(function (newPlayer) {
            console.log(newPlayer);
            res.json(newPlayer);
        });
    });

    //this is to populate players data in a game
    app.get("api/player/game", function (req, res) {

        res.render('index', { gameData });
    })

    // // update user where signed in is true and change signed in status to false when signed out


    app.post("/api/players/signin", function (req, res) {
        //grab body data to run a query.
        console.log("user from signin");
        var user = req.body;
        // console.log("stringify? " + user);
        console.log(user.email);
        db.Player.findOne({
            where: {
                email: user.email
                // password: req.query.password
            }
        }).then(function (user) {
            console.log("callback from findOne");
            if (user != "null") {

                updatePlayer(user.email, res, req);

            } else {
                res.send(user);
            }
        })
    })

    function updatePlayer(email, res, req) {
        db.Player.update({
            player_signed_in: true
        }, {
                where: {
                    email: email
                }
            }).then(function (update) {
                // res.json(update);
                console.log("callback from updatePlayer")
                // from user take id
                console.log("update user ", update)
                res.json(update)
            });
    };

    //where should this function live so that it connects to display??
    app.post("/api/players/logout/:id", function (req, res) {
        db.Player.update({
            player_signed_in: false
        }, {
                where: {
                    email: email
                },

            }).then(function (update) {
                res.json(update);
                res.render('user');
            });

    })



}

