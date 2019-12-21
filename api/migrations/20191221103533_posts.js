exports.up = knex => {
  return knex.schema.createTable('posts', table => {
    table.increments('id')
    table.text('contents')
    table.string('uuid', 32).unique('uuid')
    table.integer('userid')
    table.boolean('active').defaultTo(true)
    table.integer('interested').defaultTo(0)
    table.integer('responseto')
    table.timestamp('posttime').defaultTo(knex.fn.now())
    table.timestamp('lastupdatetime').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('posts')
}
