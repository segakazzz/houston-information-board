const log = require('../logging.js') // accesses logging module
log.info('Connecting to the database ...')
const dbConfigs = require('../../knexfile.js') // accesses knexfile module that specifies the database to use
const config = dbConfigs.development
const db = require('knex')(config)

module.exports = {
  db: db
}