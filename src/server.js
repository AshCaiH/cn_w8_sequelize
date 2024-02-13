require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const bookRouter = require("./books/routes");


const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(bookRouter);

const syncTables = async () => {
    await Book.sync();
    console.log("Tables synced");
}

app.get("/health", (req, res) => {
    res.status(200).json({message:"API is healthy"});
})

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`)
    console.log(`Page accessible at http://localhost/${port}`)
});