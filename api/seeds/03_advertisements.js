const faker = require('faker')

const fakeAdvertisements = [...Array(10).keys()].map(() => {
  return {
    companyname: faker.company.companyName(),
    address: faker.address.streetAddress(),
    address_state: faker.address.stateAbbr(),
    address_city: faker.address.city(),
    address_zip: faker.address.zipCode(),
    address_country: 'US',
    catchphrase: faker.company.catchPhrase(),
    description: faker.lorem.sentences(),
    imageurl: `https://picsum.photos/500?blur&random=${faker.random.number() *
    faker.random.number()}`,
  }
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('advertisements')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('advertisements').insert(fakeAdvertisements)
    })
}
