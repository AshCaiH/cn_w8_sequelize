const { DataTypes } = require("sequelize");
const sequelize = require("../../db/connection");

const Genre = sequelize.define(
    "Genre", {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    },
    { timestamps: false },
);

module.exports = Genre;