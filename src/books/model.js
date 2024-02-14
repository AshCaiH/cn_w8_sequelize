const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Book = sequelize.define(
    "Book", {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            defaultValue: "Author unspecified"
        },
    },
    { timestamps: false },
);

module.exports = Book;