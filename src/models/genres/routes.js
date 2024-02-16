const { Router } = require("express");
const router = Router();
const Controllers = require("../_functions/controllers.js");

const Genre = require("./model.js");
const Book = require("../books/model.js");
const Author = require("../authors/model.js");

const Model = Genre;
const path = "/genres";


// Create
router.post(path, (req,res) => Controllers.addItems(req,res,Model, ["name"]));

// Read
router.get(path, (req,res) => Controllers.readAllItems(req,res,Model, { include: [{ model: Book, attributes: ["title"]}]} ));

router.get(path + "/:key/:value", (req,res) => Controllers.searchItems(req, res, Model, {
    include: [  { model: Book, attributes: ["title"], include: {
                  model: Author, attributes: ["name"]}}]
}, {label: "authors", target:"Author"}));

// Update
router.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
router.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));
router.delete(path + "/deleteAll", (req,res) => Controllers.deleteAllItems(req,res,Model));

module.exports = router