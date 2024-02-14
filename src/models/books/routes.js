const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers.js");
const Controllers = require("../_functions/modelFunctions.js");
const Book = require("./model.js");
const Genre = require("../genres/model.js");
const Author = require("../authors/model.js");

// Create
bookRouter.post("/books", ctrl.addBook);

// Read
bookRouter.get("/books", (req,res) => Controllers.read(req,res,Book, { include: Genre, Author }));

// Update
bookRouter.put("/books", ctrl.updateBooks);

// Delete
bookRouter.delete("/books", ctrl.deleteBooks);


module.exports = bookRouter;