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
            const book = await Book.create({
                title:  req.body.title,
                author: req.body.author,
                genre:  req.body.genre,
            });

            sendSuccess(res, 'Successfully added book to database.', {books: book});
        } catch (error) {sendError(res, error)};
    },

    // Read
    readBooks: async (req, res) => {
        try {
            const books = await Book.findAll();

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

            sendSuccess(res, 'Books successfully removed books from database.', {books: books});
        } catch (error) {sendError(res, error)};
    },
}