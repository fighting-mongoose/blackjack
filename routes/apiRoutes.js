var db = require("../models");

module.exports = function (app) {
    app.get("/api/players/:game", function (req, res) {
        db.Players.findOne({
            where: {
                game: req.params.game
            }
        }).then(function (dbPlayer) {
            console.log(dbPlayer);
            res.json(dbPlayer);
        })
    })
}

