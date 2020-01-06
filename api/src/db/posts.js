const { db } = require('./init.js')
const uuid= require('uuid/v4')

const getAllPosts = () => db('posts').select('*').orderBy('posttime', 'desc')

const getSinglePost = (id) => db('posts').select('*').where({id: id})

const insertNewPost = (form) => {
    const insertData = form
    insertData.uuid = uuid().replace(/-/g, '')
    insertData.active = 1
    insertData.interested = 0
    return db('posts').insert(insertData)
}

module.exports = {
    getAllPosts: getAllPosts,
    getSinglePost: getSinglePost,
    insertNewPost: insertNewPost
}