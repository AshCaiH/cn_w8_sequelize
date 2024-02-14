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
    readItems: async (req, res, Model, options) => {
        try {
            const items = await Model.findAll(options) //{ include: Genre, Author });

            sendSuccess(res, 'Successfully retrieved list of items.', {items: items});
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
}