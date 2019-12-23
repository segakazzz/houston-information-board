const { db } = require('./init.js')

const getAllAdvertisements = () => db('advertisements').select('*')

module.exports = {
    getAllAdvertisements: getAllAdvertisements,
}