
module.exports = function (options = {}) {

    return async context => {

        const { data } = context;

        console.log(context.result.data)
        console.log("user",context.params)
        
        // const result = context.result.data.filter({
        //     query:{
        //         user_detail: context.params.user._id.valueOf()
        //     }

        // })

        

        // const databaseCartData = await context.app.service("cart").find({
        //     query: {
        //         _id: context.id
        //     }
        // });

        // if(!databaseCartData.data.length){
        //     throw new Error(`Document not found`);

        // }


        // if (context.params.user) {

        //     if (context.params.user.isAdmin || (context.params.user._id.valueOf() == databaseCartData.data[0].user_detail)) {

        //         return context;

        //     } else {

        //         throw new Error('You are not allowed to access this');
        //     }

        // }



        

    };

};