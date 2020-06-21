// Initializes the `communities` service on path `/communities`
const { Communities } = require('./communities.class');
const createModel = require('../../models/communities.model');
const hooks = require('./communities.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/communities', new Communities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('communities');

  service.hooks(hooks);
};
