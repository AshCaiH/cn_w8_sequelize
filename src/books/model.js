const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: "Author unspecified"
    },
    genre: {
        type: DataTypes.STRING,
        defaultValue: "Genre unspecified"
    }
});

module.exports = Book;