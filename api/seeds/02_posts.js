const faker = require('faker')
const uuidv4 = require('uuid/v4')


const fakePosts = [...Array(100).keys()].map(() => {
  const uuid = uuidv4()
  const replaced = uuid.replace(/-/g, '')  
  return { title: faker.lorem.sentence(), text: faker.lorem.paragraph(), uuid: replaced}
})

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert(fakePosts)
    })
}
