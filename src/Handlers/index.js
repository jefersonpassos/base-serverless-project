const Middy = require('@middy/core');
const Handler1 = require('./Handler1');
const Services = require('../Services');
const Middlewares = require('../Middleware');
const Helpers = require('../Helpers');
const Models = require('../Models');

const handler1 = (event, context, cb) => Handler1({
  event, context, cb, service1: Services.service1, mongo: Helpers.mongo, UserModel: Models.User,
});

module.exports = {
  handler1: Middy(handler1).use([Middlewares.JsonBodyParser(), Middlewares.APIResponse()]),
};
