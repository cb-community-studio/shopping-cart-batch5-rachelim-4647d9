
module.exports = function (options = {}) {

    return async (context, res) => {

        try {

            const { data, method } = context;

            const databaseCartData = await context.app.service("cart").find({
                query: {
                    _id: context.id
                }
            });

            if(!databaseCartData.data.length){
                throw new Error(`Document not found`);

            }

            const databaseProductData = await context.app.service("products").find({
                query: {
                    sku: databaseCartData.data[0].product_sku
                }
            });

            
            let inStock = databaseProductData.data[0].inStock + databaseCartData.data[0].quantity

            let inReserved = databaseProductData.data[0].inReserved - databaseCartData.data[0].quantity

            const updateProduct = await context.app.service("products").patch(databaseProductData.data, {
                inStock: inStock, inReserved: inReserved
            });

            if (updateProduct) {
                return context;
            }

        } catch (error) {

            throw new Error(`An unknown error occurred--> ${error}`);
        }



    };

};