const Book = require("./model")


module.exports = {
    addBook: async (req, res) => {
        try {
            const book = await Book.create({
                title:  req.body.title,
                author: req.body.author,
                genre:  req.body.genre,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
            });
        };
    }
}