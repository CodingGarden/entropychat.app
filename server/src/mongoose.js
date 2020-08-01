const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  const mongodb = app.get('mongodb');
  const password = encodeURIComponent(mongodb.root_password);
  const connectionString = `mongodb://${mongodb.root_user}:${password}@${mongodb.host}:${mongodb.port}/${mongodb.db_name}?authSource=admin`; mongoose.connect(
    connectionString,
    { useCreateIndex: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
