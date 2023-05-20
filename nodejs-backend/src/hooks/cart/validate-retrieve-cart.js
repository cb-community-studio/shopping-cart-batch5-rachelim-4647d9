
module.exports = function (options = {}) {

    return async context => {

        const { data } = context;


        if (context.params.user) {

            if (context.params.user.isAdmin) {
                return context;

            } else {

                context.params.query = {...context.params.query, user_detail : context.params.user._id.valueOf()}


            }

        }



        

    };

};