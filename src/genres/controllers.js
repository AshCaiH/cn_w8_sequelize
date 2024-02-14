const Genre = require("./model")

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
    addGenre: async (req, res) => {
        try {
            const genreList = [];

            for (item of req.body) {
                genreList.push({
                    name: item.name,
                });
            }

            const genres = await Genre.bulkCreate(genreList);

            sendSuccess(res, 'Successfully added genre to database.', {genres: genres});
        } catch (error) {sendError(res, error)};
    },

    // Read
    readGenres: async (req, res) => {
        try {
            const genres = await Genre.findAll();

            sendSuccess(res, 'Successfully retrieved list of genres.', {genres: genres});
        } catch (error) {sendError(res, error)};
    },

    // Update
    updateGenres: async (req, res) => {
        try {
            const genres = await Genre.update(
                req.body.update,
                { where: req.body.where},
            );

            sendSuccess(res, 'Successfully updated genres.', {genres: genres});
        } catch (error) {sendError(res, error)};
    },

    // Delete
    deleteGenres: async (req, res) => {
        try {
            const genres = await Genre.destroy({ where: req.body.where});

            sendSuccess(res, 'Successfully removed genres from database.', {genres: genres});
        } catch (error) {sendError(res, error)};
    },
}