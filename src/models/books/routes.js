const { Router } = require("express");
const bookRouter = Router();
const router = bookRouter;

const Controllers = require("../_functions/controllers.js");
const Book = require("./model.js");
const Genre = require("../genres/model.js");
const Author = require("../authors/model.js");

const Model = Book;
const path = "/books"

// Create
router.post(path, (req,res) => Controllers.addItems(req,res,Model, ["title", "AuthorId", "GenreId"]));

// Read
router.get(path, (req,res) => Controllers.readItems(req,res,Model, { include: [Genre, Author] }));

// Update
router.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
router.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));


module.exports = bookRouter;