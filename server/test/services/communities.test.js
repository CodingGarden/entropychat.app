const assert = require('assert');
const app = require('../../src/app');

describe('\'communities\' service', () => {
  it('registered the service', () => {
    const service = app.service('communities');

    assert.ok(service, 'Registered the service');
  });
});
