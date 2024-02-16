const { Router } = require("express");
const router = Router();
const Controllers = require("../_functions/controllers.js");

const Book = require("./model.js");
const Genre = require("../genres/model.js");
const Author = require("../authors/model.js");

const Model = Book;
const path = "/books"


// Create
router.post(path, (req,res) => Controllers.addItems(req,res,Model, ["title", "AuthorId", "GenreId"]));

// Read
router.get(path, (req,res) => Controllers.readAllItems(req,res,Model, { include: [Genre, Author] }));

router.get(path + "/:key/:value", (req,res) => Controllers.searchItems(req, res, Model, { include: [Genre, Author] }));

// Update
router.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
router.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));
router.delete(path + "/deleteAll", (req,res) => Controllers.deleteAllItems(req,res,Model));

module.exports = router;