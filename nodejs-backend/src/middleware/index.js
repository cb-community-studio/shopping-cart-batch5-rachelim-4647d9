// eslint-disable-next-line no-unused-vars

const {forgetPassword} = require('./users/forget-password')

module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.get('/forgetPassword', forgetPassword)

  
};
