const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers.js")

// Create
bookRouter.post("/books", ctrl.addBook);

// Read
bookRouter.get("/books", ctrl.readBooks);

// Update
bookRouter.put("/books", ctrl.updateBooks);

// Delete
bookRouter.delete("/books", ctrl.deleteBooks);


module.exports = bookRouter;