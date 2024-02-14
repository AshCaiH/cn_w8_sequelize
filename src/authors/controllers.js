const Author = require("./model")

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
    addAuthor: async (req, res) => {
        try {
            const authorList = [];

            for (item of req.body) {
                authorList.push({
                    name: item.name,
                });
            }

            const authors = await Author.bulkCreate(authorList);

            sendSuccess(res, 'Successfully added author to database.', {authors: authors});
        } catch (error) {sendError(res, error)};
    },

    // Read
    readAuthors: async (req, res) => {
        try {
            const authors = await Author.findAll();

            sendSuccess(res, 'Successfully retrieved list of authors.', {authors: authors});
        } catch (error) {sendError(res, error)};
    },

    // Update
    updateAuthors: async (req, res) => {
        try {
            const authors = await Author.update(
                req.body.update,
                { where: req.body.where},
            );

            sendSuccess(res, 'Successfully updated authors.', {authors: authors});
        } catch (error) {sendError(res, error)};
    },

    // Delete
    deleteAuthors: async (req, res) => {
        try {
            const authors = await Author.destroy({ where: req.body.where});

            sendSuccess(res, 'Successfully removed authors from database.', {authors: authors});
        } catch (error) {sendError(res, error)};
    },
}