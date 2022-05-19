const mongoose = require('mongoose');
const config = require('../../config');
const Mongo = require('./Mongo');

module.exports = {
  mongo: Mongo({ mongoose, config }),
};
