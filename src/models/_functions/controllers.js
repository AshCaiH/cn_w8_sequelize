const { Sequelize } = require("sequelize");
const Book = require("../books/model");

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
    addItems: async (req, res, Model, options) => {
        try {
            const itemsToAdd = [];

            for (const item of req.body) {
                itemsToAdd.push(
                    Object.fromEntries(
                        options.map((key) => {
                            return [key, item[key]]
                        })
                    )
                );
            }

            const items = await Model.bulkCreate(itemsToAdd);

            sendSuccess(res, 'Successfully added items to database.', {items: items});
        } catch (error) {sendError(res, error)};
    },

    // Read
    readAllItems: async (req, res, Model, options) => {
        try {
            const items = await Model.findAll(options) //{ include: Genre, Author });

            sendSuccess(res, 'Successfully retrieved list of items.', {items: items});
        } catch (error) {sendError(res, error)};
    },

    searchItems: async (req, res, Model, options, distantRelations) => {
        try {
            const mergeOptions = {...options, where: {
                [req.params["key"]]: req.params["value"]
            }}

            const items = await Model.findAll(mergeOptions)

            // Handles things differently if the distantRelations parameter is filled in.
            // If it is, makes a list of loosely paired values as set in the parameter
            // eg authors who have written for the queried genre.
            if (distantRelations && items.length > 0) {
                let extra = [];

                items[0].Books.map((book) => {
                    extra.push(book[distantRelations.target].name);
                });

                extra = [...new Set(extra)];

                sendSuccess(res, 'Search successful.', {items: items[0], [distantRelations.label]:extra});
            } else {
                sendSuccess(res, 'Search successful.', {items: items});
            }
        } catch (error) {sendError(res, error)};
    },

    // Update
    updateItems: async (req, res, Model) => {
        try {
            const items = await Model.update(
                req.body.update,
                { where: req.body.where},
            );

            sendSuccess(res, 'Successfully updated items.', {items: items});
        } catch (error) {sendError(res, error)};
    },

    // Delete
    deleteItems: async (req, res, Model) => {
        try {
            const items = await Model.destroy({ where: req.body.where});

            sendSuccess(res, 'Successfully removed items from database.', {items: items});
        } catch (error) {sendError(res, error)};
    },

    deleteAllItems: async (req, res, Model) => {
        try {
            const items = await Model.destroy({ where: {}});

            sendSuccess(res, 'Successfully removed all items from database.', {items: items});
        } catch (error) {sendError(res, error)};
    }
}