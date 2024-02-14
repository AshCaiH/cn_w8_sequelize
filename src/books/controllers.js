const Genre = require("../genres/model");
const Author = require("../authors/model");
const Book = require("./model")

const sendError = (res, error) => {
    res.status(500).json({
        message: error.message,
        error: error,
    });
}

const sendSuccess = (res, message, extra) => {
    res.status(200).json({message, ...extra});
}

module.exports = {
    // Create
    addBook: async (req, res) => {
        try {
            const bookList = [];

            for (item of req.body) {
                bookList.push({
                    title: item.title,
                    AuthorId: item.AuthorId,
                    GenreId: item.GenreId,
                });
            }

            const books = await Book.bulkCreate(bookList);

            sendSuccess(res, 'Successfully added books to database.', {books: books});
        } catch (error) {sendError(res, error)};
    },

    // Read
    readBooks: async (req, res) => {
        try {
            const books = await Book.findAll({ include: Genre, Author });

            sendSuccess(res, 'Successfully retrieved list of books.', {books: books});
        } catch (error) {sendError(res, error)};
    },

    // Update
    updateBooks: async (req, res) => {
        try {
            const books = await Book.update(
                req.body.update,
                { where: req.body.where},
            );

            sendSuccess(res, 'Books successfully updated.', {books: books});
        } catch (error) {sendError(res, error)};
    },

    // Delete
    deleteBooks: async (req, res) => {
        try {
            const books = await Book.destroy({ where: req.body.where});

            sendSuccess(res, 'Successfully removed books from database.', {books: books});
        } catch (error) {sendError(res, error)};
    },
}