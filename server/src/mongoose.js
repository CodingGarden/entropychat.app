const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  const mongodb = app.get('mongodb');
  const password = encodeURIComponent(mongodb.root_password);
  const connectionString = 'mongodb://localhost:27017/entropychat';
  mongoose.connect(
    connectionString,
    { useCreateIndex: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
