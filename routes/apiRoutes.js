var db = require("../models");

module.exports = function (app) {

    app.post("/api/players", function (req, res) {
        db.Player.create(req.body).then(function (newPlayer) {
            console.log(newPlayer);
            res.json(newPlayer);
        });
    });

    app.get("/api/players/signin", function (req, res) {
        //grab body data to run a query. 
        db.Player.findOne({
            where: {
                email: req.query.email,
                password: req.query.password
            }
        }).then(function (login) {
            if (login != "null") {
                res.send(true);
                updatePlayer(req.query.email);
            } else {
                res.send(false);
            }
        })
    })

    function updatePlayer(email) {
        db.Player.update({
            player_signed_in: true
        }, {
                where: {
                    email: email
                }
            }).then(function (update) {
                res.json(update);
            });
    };


}

