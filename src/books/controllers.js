const Book = require("./model")


module.exports = {
    addBook: async (req, res) => {
        try {
            const book = await Book.create({
                title:  req.body.title,
                author: req.body.author,
                genre:  req.body.genre,
            });

            res.status(200).json(
                {
                    message: 'Successfully added book to database.', 
                    book:book 
                }
            );
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
            });
        };
    }
}