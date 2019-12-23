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
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    imageurl: `https://picsum.photos/500?blur&random=${faker.random.number() *
    faker.random.number()}`,
    url: 'https://www.google.com/'
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
