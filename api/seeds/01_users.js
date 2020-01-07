const faker = require('faker')
const uuidv4 = require('uuid/v4')

const fakeUsers = [...Array(10).keys()].map(() => {
  const uuid = uuidv4()
  const replaced = uuid.replace(/-/g, '')
  return {
    nickname: faker.internet.userName(),
    userimage: faker.internet.avatar(),
    email: faker.internet.email(),
    password: replaced
  }
})

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert(fakeUsers)
      })
    })
}
