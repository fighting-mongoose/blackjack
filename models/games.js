module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        players: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        full: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }, player_ids: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false
        }
    }, {
            freezeTableName: true
        });
    return Game;
}