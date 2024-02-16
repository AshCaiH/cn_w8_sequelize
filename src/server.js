require("dotenv").config();

const express = require("express");
const app = express();

const Book = require("./models/books/model");
const Genre = require("./models/genres/model");
const Author = require("./models/authors/model");
const models = [Book, Genre, Author];

const bookRouter = require("./models/books/routes");
const genreRouter = require("./models/genres/routes");
const authorRouter = require("./models/authors/routes");
const routers = [bookRouter, genreRouter, authorRouter];

const port = process.env.PORT || 5001;


app.use(express.json());
routers.map((router) => app.use(router));

const syncTables = async () => {
    models.map((model) => app.use(model));
    
    Genre.hasMany(Book);
    Author.hasMany(Book);
    
    
    Book.belongsTo(Genre);
    Book.belongsTo(Author);

    models.map((model) => model.sync());

    console.log("Tables synced");
}

app.get("/health", (req, res) => {
    res.status(200).json({message:"API is healthy"});
})

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`)
    console.log(`Page accessible at http://localhost/${port}`)
});