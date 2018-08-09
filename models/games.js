module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        // players: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        full: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        // player_ids: {
        //     type: DataTypes.ARRAY(DataTypes.TEXT),
        //     allowNull: false
        // }
    }, {
            freezeTableName: true
        });

    Game.associate = function (models) {
        // Associating Game with Player
        // When an Game is deleted, also delete any associated Player
        Game.hasMany(models.Player, {
            onDelete: "cascade"
        });
    };

    return Game;
}