var db = require("../models");

module.exports = function (app) {

    app.post("/api/players", function (req, res) {
        db.Player.create(req.body).then(function (newPlayer) {
            console.log(newPlayer);
            db.Player.findOne({
                where: {
                    email: newPlayer.email
                    // password: req.query.password
                }
            }).then(function (player) {

                console.log("spicy" + player.id);

                res.send(player);
            })
        });
    });

    //this is to populate players data in a game
    // app.get("/api/player/game", function (req, res) {

    //     res.render('index', { gameData });
    // })

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
        }).then(function (player) {
            console.log("callback from findOne");
            if (player != "null") {

                updatePlayer(player, res, req);
                console.log("spicy" + player.id);

            } else {
                res.send(player);
            }
        })
    })

    function updatePlayer(playerHere, res, req) {
        db.Player.update({
            player_signed_in: true
        }, {
                where: {
                    email: playerHere.email
                }

            }).then(function (update) {
                // res.json(update);
                console.log("callback from updatePlayer")
                // from user take id
                console.log("update user ", update)
                console.log("user id is still" + update.id);
                res.json(playerHere);
            });
    };

    app.put("/api/players/logout/:id", function (req, res) {
        var id = req.params.id;
        var signedInStat = req.body.signedInStat;
        db.Player.update({
            player_signed_in: signedInStat
        }, {
                where: {
                    id: id
                }
            }).then(function () {
                res.render("welcome");
            })
    })

    //connect to the database
    //select the player that is currently displayed
    //allow them to push the cash out button and change their status to signed out in database
    //once they are signed out I want to send them to the welcome page 


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

