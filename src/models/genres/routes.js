const { Router } = require("express");
const Genre = require("./model.js");
const genreRouter = Router();

const Controllers = require("../_functions/modelFunctions.js");

const ctrl = require("./controllers.js");

const Model = Genre;
const path = "/genres";

// Create
genreRouter.post(path, (req,res) => Controllers.addItems(req,res,Model, ["name"]));

// Read
genreRouter.get(path, (req,res) => Controllers.readItems(req,res,Model));

// Update
genreRouter.put(path, (req,res) => Controllers.updateItems(req,res,Model));

// Delete
genreRouter.delete(path, (req,res) => Controllers.deleteItems(req,res,Model));


module.exports = genreRouter