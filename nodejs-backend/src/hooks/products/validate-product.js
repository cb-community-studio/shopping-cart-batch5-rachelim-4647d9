module.exports = function (options = {}) {

    return async (context, res) => {

        try {

            const { data } = context;

            const sku = data.sku

            // const databaseData = await context.app.service("products").find({
            //     query: {
            //         sku
            //     }
            // });

            console.log(data)

            if (data.price < 0 || data.rating < 0 || data.inStock < 0 || data.inReserved < 0) {
                throw new Error('The value cannot be negative integer.');
            }

            return context;

        } catch (error) {
            throw new Error(`An unknown error occurred--> ${error}`);
        }



    };

};