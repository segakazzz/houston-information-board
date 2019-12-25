const { db } = require('./init.js')

const getAllComments = () => db('comments').select('*')

module.exports = {
    getAllComments: getAllComments,
}