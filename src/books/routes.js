const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers.js")

bookRouter.post("/books/addBook", ctrl.addBook);

module.exports = bookRouter;