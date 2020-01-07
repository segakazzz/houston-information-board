const { db } = require('./init.js')
const uuid = require('uuid/v4')

const getAllPosts = () =>
  db
    .select(['posts.*', 'users.nickname', 'users.userimage'])
    .from('posts')
    .leftJoin('users', 'posts.userid', 'users.id')

const getSinglePost = id =>
  db
    .select(['posts.*', 'users.nickname', 'users.userimage'])
    .from('posts')
    .leftJoin('users', 'posts.userid', 'users.id')
    .where({ 'posts.id': id })

const insertNewPost = form => {
  const insertData = form
  insertData.uuid = uuid().replace(/-/g, '')
  insertData.userid = Math.ceil(Math.random() * 10)
  insertData.active = 1
  insertData.interested = 0
  return db('posts').insert(insertData)
}

module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost,
  insertNewPost: insertNewPost
}
