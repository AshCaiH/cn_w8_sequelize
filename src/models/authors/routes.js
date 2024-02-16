const { Router } = require("express");
const Controllers = require("../_functions/controllers.js");
const router = Router();

const Author = require("./model.js");
const Book = require("../books/model.js");
const Genre = require("../genres/model.js");

const Model = Author;
const path = "/authors";


// Create
router.post(path, (req,res) => Controllers.addItems(req,res,Model, ["name"]));

// Read
router.get(path, (req,res) => Controllers.readAllItems(req,res,Model, { include: [{ model: Book}]} ));

router.get(path + "/:key/:value", (req,res) => Controllers.searchItems(req, res, Model, {
    include: [  { model: Book, attributes: ["title"], include: {
                  model: Genre}}]
}, {label: "genres", target:"Genre"}));

// Update
router.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
router.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));
router.delete(path + "/deleteAll", (req,res) => Controllers.deleteAllItems(req,res,Model));

module.exports = router;