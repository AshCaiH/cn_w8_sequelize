const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers.js")

// Create
bookRouter.post("/books/addBook", ctrl.addBook);

// Read
bookRouter.get("/books", ctrl.readBooks);

// Update
bookRouter.put("/books", ctrl.updateBooks);

// Delete


module.exports = bookRouter;