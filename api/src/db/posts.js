const { db } = require('./init.js')

const getAllPosts = () => db('posts').select('*')

module.exports = {
    getAllPosts: getAllPosts,
}