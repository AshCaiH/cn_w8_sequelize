const { Router } = require("express");
const genreRouter = Router();

const ctrl = require("./controllers.js")

// Create
genreRouter.post("/genres", ctrl.addGenre);

// Read
genreRouter.get("/genres", ctrl.readGenres);

// Update
genreRouter.put("/genres", ctrl.updateGenres);

// Delete
genreRouter.delete("/genres", ctrl.deleteGenres);


module.exports = genreRouter;