
exports.up = knex => {
    return knex.schema.createTable('users',  table => {
        table.increments('id')
        table.string('nickname')
        table.string('userimage')
        table.string('email')
        table.string('password')
        table.timestamp('createdtime').defaultTo(knex.fn.now())
        table.timestamp('lastupdatetime').defaultTo(knex.fn.now())
    })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
