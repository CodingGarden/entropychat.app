const users = require('./users/users.service.js');
const messages = require('./messages/messages.service.js');
const communities = require('./communities/communities.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(messages);
  app.configure(communities);
};
