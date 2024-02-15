const { Router } = require("express");
const Author = require("./model.js");
const router = Router();

const Controllers = require("../_functions/controllers.js");

const Model = Author;
const path = "/authors";

// Create
router.post(path, (req,res) => Controllers.addItems(req,res,Model, ["name"]));

// Read
router.get(path, (req,res) => Controllers.readItems(req,res,Model));

// Update
router.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
router.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));


module.exports = router;