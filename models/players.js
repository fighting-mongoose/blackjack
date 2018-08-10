var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
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

        player_signed_in: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        bet: {
            type: DataTypes.FLOAT,
            allowNull: true
        },

    }, {
            freezeTableName: true,
        });

    Player.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    Player.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
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