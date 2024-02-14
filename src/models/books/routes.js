const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers.js");
const Controllers = require("../_functions/modelFunctions.js");
const Book = require("./model.js");
const Genre = require("../genres/model.js");
const Author = require("../authors/model.js");

const Model = Book;
const path = "/books"

// Create
bookRouter.post(path, (req,res) => Controllers.addItems(req,res,Model, ["title", "AuthorId", "GenreId"]));

// Read
bookRouter.get(path, (req,res) => Controllers.readItems(req,res,Model, { include: [Genre, Author] }));

// Update
bookRouter.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
bookRouter.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));


module.exports = bookRouter;