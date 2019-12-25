exports.up = knex => {
    return knex.schema.createTable('comments', table => {
      table.increments('id')
      table.integer('postid')
      table.text('comment')
      table.integer('userid')
      table.boolean('active').defaultTo(true)
      table.timestamp('posttime').defaultTo(knex.fn.now())
      table.timestamp('lastupdatetime').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('comments')
  }
  