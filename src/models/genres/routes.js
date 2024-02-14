const { Router } = require("express");
const Genre = require("./model.js");
const genreRouter = Router();

const Controllers = require("../_functions/modelFunctions.js");

const ctrl = require("./controllers.js");

// Create
genreRouter.post("/genres", ctrl.addGenre);

// Read
genreRouter.get("/genres", (req,res) => Controllers.read(req,res,Genre));

// Update
genreRouter.put("/genres", ctrl.updateGenres);

// Delete
genreRouter.delete("/genres", ctrl.deleteGenres);


module.exports = genreRouter;