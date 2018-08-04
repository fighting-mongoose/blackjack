module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: Datatype.STRING,
            allowNull: false
        },
        total_credits: {
            type: Datatype.FLOAT,
            allowNull: false
        },
        game: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        waitingRoom: {
            type: Datatype.BOOLEAN,
            defaultValue: true
        },
        player_ready: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        bet: {
            type: Datatype.FLOAT,
            allowNull: false
        },
        hand_split: {
            type: Datatype.ARRAY(Datatype.TEXT),
            allowNull: false
        }
    });
    return Player;
}