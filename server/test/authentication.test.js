const assert = require('assert');
const app = require('../src/app');

describe('authentication', () => {
  it('registered the authentication service', () => {
    assert.ok(app.service('authentication'));
  });
  
});
