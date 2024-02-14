const { Router } = require("express");
const authorRouter = Router();

const ctrl = require("./controllers.js")

// Create
authorRouter.post("/authors", ctrl.addAuthor);

// Read
authorRouter.get("/authors", ctrl.readAuthors);

// Update
authorRouter.put("/authors", ctrl.updateAuthors);

// Delete
authorRouter.delete("/authors", ctrl.deleteAuthors);


module.exports = authorRouter;