module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_credits: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        game: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        waitingRoom: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        player_ready: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        bet: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        hand_split: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false
        },
    });
    return Player;
}