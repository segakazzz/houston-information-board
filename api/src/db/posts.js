const { db } = require('./init.js')

const getAllPosts = () => db('posts').select('*').orderBy('posttime', 'desc')

module.exports = {
    getAllPosts: getAllPosts,
}