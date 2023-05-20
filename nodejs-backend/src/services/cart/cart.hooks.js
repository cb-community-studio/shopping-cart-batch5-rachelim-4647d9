const { authenticate } = require("@feathersjs/authentication").hooks;
const validateCart = require('../../hooks/cart/validate-cart');
const validateAdminOwnUser = require('../../hooks/cart/validate-admin-ownuser');
const validateDelete = require('../../hooks/cart/validate-cart-delete');
const validateRetrieve = require('../../hooks/cart/validate-retrieve-cart');

module.exports = {
    before: {
        all: [authenticate("jwt")],
        find: [validateRetrieve()],
        get: [validateRetrieve()],
        create: [validateCart()],
        update: [validateCart()],
        patch: [validateCart()],
        remove: [validateAdminOwnUser(), validateDelete()],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
