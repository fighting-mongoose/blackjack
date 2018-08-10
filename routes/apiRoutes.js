var db = require("../models");

module.exports = function (app) {
    // //gets players data for a single game
    // app.get("/api/players/:game", function (req, res) {

    //     db.Players.findOne({
    //         attributes: [name, total_credits, player_ready, bet, hand_split],
    //         where: {
    //             game: req.params.game
    //         }
    //     }).then(function (dbPlayer) {
    //         console.log(dbPlayer);
    //         res.json(dbPlayer);

    //     })
    // });

    // //gets individual player data when they log in. 
    // app.get("/api/players/:id", function (req, res) {
    //     db.Player.findOne({
    //         attributes: [name, total_credits, waitingRoom],
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbPlayer) {
    //         console.log(dbPlayer);
    //         res.json(dbPlayer);

    //     })
    // });

    app.post("/api/players", function (req, res) {
        db.Player.create(req.body).then(function (newPlayer) {
            console.log(newPlayer);
            res.json(newPlayer);
        });
    })



}

