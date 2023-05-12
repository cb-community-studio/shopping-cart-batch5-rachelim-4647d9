const { authenticate } = require("@feathersjs/authentication").hooks;
const validateCart = require('../../hooks/cart/validate-cart');
const validateAdminOwnUser = require('../../hooks/cart/validate-admin-ownuser');
const validateDelete = require('../../hooks/cart/validate-cart-delete');
const validateRetrive = require('../../hooks/cart/validate-retrive-cart');
const try_t = require("../../hooks/cart/try")

module.exports = {
    before: {
        all: [authenticate("jwt")],
        find: [],
        get: [try_t()],
        create: [validateCart()],
        update: [validateCart()],
        patch: [validateCart()],
        remove: [validateAdminOwnUser(), validateDelete()],
    },

    after: {
        all: [],
        find: [validateRetrive()],
        get: [validateRetrive()],
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
