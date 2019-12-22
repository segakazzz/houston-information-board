exports.up = knex => {
    return knex.schema.createTable('advertisements', table => {
      table.increments('id')
      table.string('companyname')
      table.text('address')
      table.string('address_state', 2)
      table.string('address_city', 50)
      table.string('address_zip', 10)
      table.string('address_country', 2)
      table.string('imageurl')
      table.text('url')
      table.text('catchphrase')
      table.text('description')
      table.boolean('active').defaultTo(true)
      table.timestamp('posttime').defaultTo(knex.fn.now())
      table.timestamp('lastupdatetime').defaultTo(knex.fn.now())
      table.timestamp('validuntil')
    })
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('advertisements')
  }
  