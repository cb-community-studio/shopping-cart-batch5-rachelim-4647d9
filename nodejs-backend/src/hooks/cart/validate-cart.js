// Quantity of product must more than the quality saved in cart
// Add user details into user field ,user_detail
// if want to allow admin to update cart, the user field of cart must make sure retrive back the original user !!!

module.exports = function (options = {}) {

    return async (context, res) => {

        try {

            const { data, method } = context;

            // every time create or patch must bring along the product_sku
            if (!data.product_sku){
                throw new Error('Please insert the product sku');

            }
            const sku = data.product_sku
            const user_detail = context.params.user._id.valueOf()

            const databaseProductData = await context.app.service("products").find({
                query: {
                    sku
                }
            });

            console.log(context)

            // Check the existing cart
            const databaseCartData = await context.app.service("cart").find({
                query: {
                    product_sku: sku, user_detail: user_detail
                }
            });

            console.log(context)

            data.user_detail = context.params.user._id.valueOf()

            console.log(data.product_sku, "  ", databaseProductData.data[0].inStock, "  ", data.quantity)

            if (databaseProductData.data[0].inStock >= data.quantity) {

                if (!databaseCartData.data.length && !context.id) {

                    let inStock = databaseProductData.data[0].inStock - data.quantity

                    let inReserved = databaseProductData.data[0].inReserved + data.quantity

                    console.log(context)

                    const updateProduct = await context.app.service("products").patch(databaseProductData.data, {
                        inStock: inStock, inReserved: inReserved
                    });

                    if (updateProduct){
                        return context;
                    }

                } else {

                    if (!databaseCartData.data.length){
                        throw new Error('Please create your own cart.');
                    }else if (context.id && context.id != databaseCartData.data[0]._id.valueOf()){
                        throw new Error('You are not allowed to update this cart');
                    } 

                    // if got id, mean direct from patch else is addition from create
                    console.log("databaseProductData", databaseProductData)
                    console.log("databaseCartData", databaseCartData)
                    let inStock = context.id ? databaseProductData.data[0].inStock - (data.quantity - databaseCartData.data[0].quantity) : databaseProductData.data[0].inStock - data.quantity

                    let inReserved = context.id ? databaseProductData.data[0].inReserved + (data.quantity - databaseCartData.data[0].quantity) : databaseProductData.data[0].inReserved + data.quantity
                    
                    context.data.quantity = context.id ? context.data.quantity : databaseCartData.data[0].quantity + context.data.quantity
                    // context.id = context.id ? context.id : databaseCartData.data[0]._id.valueOf()


                    console.log(context)
                    

                    const updateProduct = await context.app.service("products").patch(databaseProductData.data, {
                        inStock: inStock, inReserved: inReserved
                    });

                    if (updateProduct){

                        if (!context.id) {
                            const deleteOldCart = await context.app.service("cart").remove(databaseCartData.data);
                            if (deleteOldCart) {
                                return context;
                            }
                        }
                        else{
                            return context;
                        }
                    }

                }

            }
            else {

                throw new Error('Quantity selected exceed the minimum.');

            }

            throw new Error(`Please try again`);

        } catch (error) {

            throw new Error(`An unknown error occurred--> ${error}`);
        }



    };

};