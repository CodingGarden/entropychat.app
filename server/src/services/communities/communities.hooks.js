const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query.owner_id'
});

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      setField({
        from: 'params.user._id',
        as: 'data.owner_id'
      }),
    ],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
