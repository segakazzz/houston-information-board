
exports.up = knex => {
    return knex.schema.createTable('users',  table => {
        table.increments('id')
        table.string('nickname')
        table.string('userimage')
        table.string('email')
        table.string('password')
        table.string('uuid', 32)
        table.unique('uuid')
        table.boolean('emailverified').defaultTo(false)
        table.string('emailverificationkey', 32)
        table.boolean('active').defaultTo(true)
        table.timestamp('createdtime').defaultTo(knex.fn.now())
        table.timestamp('lastupdatetime').defaultTo(knex.fn.now())
    }).raw('ALTER TABLE users AUTO_INCREMENT = 0')
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
