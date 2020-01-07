const faker = require('faker')
// const moment = require('moment')

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

const fakeComments = [...Array(200).keys()].map(() => {
  // const date = moment(faker.date.past()).format('YYYY-MM-DD')
  // console.log(date)
  return {
    comment: faker.lorem.sentence(),
    userid: getRandomInt(10),
    postid: getRandomInt(100),
    posttime: faker.date.past(),
    lastupdatetime: faker.date.past()
  }
})

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('comments')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert(fakeComments)
    })
}
