module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        full: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
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