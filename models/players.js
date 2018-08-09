var bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total_credits: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        game: {
            type: DataTypes.INTEGER,
            allowNull: true
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
            allowNull: true
        },
        // hand_split: {
        //     type: DataTypes.ARRAY(DataTypes.TEXT),
        //     allowNull: false
        // },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
            freezeTableName: true,
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(10));
                },
                validPassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        });

    Player.associate = function (models) {
        // We're saying that a Player should belong to an Game
        // A Player can't be created without an Game due to the foreign key constraint
        Player.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Player;
};