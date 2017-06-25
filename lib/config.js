/**
 * @module config
 * @description wrapper around nconf.
 */
const nconf = require('nconf');

const DefaultConfig = {
  'logger.level': 'debug',
  'internal.adapters': [
    'simian-picture-adapter'
  ],
  'adapters': []
};

nconf
  .argv()
  .env()
  .file('./config.json')
  .defaults(DefaultConfig);

module.exports.get = function(key) {
  return nconf.get(key);
}
