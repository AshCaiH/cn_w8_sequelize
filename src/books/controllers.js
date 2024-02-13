const Book = require("./model")

const sendError = (res, error) => {
    res.status(500).json({
        message: error.message,
        error: error,
    });
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

            res.status(200).json({
                message: 'Successfully added book to database.', 
                book:book 
            });
        } catch (error) {sendError(res, error)};
    },

    // Read
    readBooks: async (req, res) => {
        try {            
            const books = await Book.findAll();

            res.status(200).json(
                {
                    message: 'List of books successfully retreived.', 
                    books: books 
                }
            );
        } catch (error) {sendError(res, error)};
    },

    // Update

    // Delete
}