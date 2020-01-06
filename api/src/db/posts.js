const { db } = require('./init.js')
const uuid= require('uuid/v4')

const getAllPosts = () => db('posts').select('*').orderBy('posttime', 'desc')

const getSinglePost = (id) => db('posts').select('*').where({id: id})

const insertNewPost = (form) => {
    return db('posts').insert(
        {
            title: form.title, 
            text: form.text,
            uuid: uuid().replace(/-/g, ''),
            active: 1,
            interested: 0
        })
}

module.exports = {
    getAllPosts: getAllPosts,
    getSinglePost: getSinglePost,
    insertNewPost: insertNewPost
}