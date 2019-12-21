
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {nickname: 'test user 1', userimage: 'path2img', email:'test1@test.com', password:''},
        {nickname: 'test user 2', userimage: 'path2img', email:'test2@test.com', password:''},
        {nickname: 'test user 3', userimage: 'path2img', email:'test3@test.com', password:''},
      ])
    })
}
