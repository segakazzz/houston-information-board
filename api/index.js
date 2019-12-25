const express = require('express')
const app = express()
const cors = require('cors')
const { getAllPosts } = require('./src/db/posts')
const { getAllComments } = require('./src/db/comments')
const { getAllAdvertisements } = require('./src/db/advertisements')
const port = 5000

const setHeader = (res) => {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
}

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, world!!')
})

app.post('/signup', (req, res) => {

})

app.post('/signin', (req, res) => {

})

app.post('/signout', (req, res) => {

})

app.get('/posts', (req, res) => {
    setHeader(res)
    Promise.all([getAllPosts(),getAllComments()])
    .then((values)=>{
        res.send({
            data: generatePostsData(values[0], values[1]),
            statusCode: 200
        })
    })
})

const generatePostsData = (posts, comments) => {
    return posts.map(post => {
        const filteredComments = comments.filter(comment => comment.postid === post.id)
        return { ...post, comments: filteredComments}
    })
}

app.get('/advertisements', (req, res) => {
    setHeader(res)
    getAllAdvertisements().then((allAdvertisements)=>{
        res.send({
            data: allAdvertisements,
            statusCode: 200
        })
    })
})


app.put('/posts/:postid', (req, res) => {

})

app.delete('/posts/:postid', (req, res) => {

})

app.put('/response/:postid', (req, res) => {

})

app.delete('/response/:responseid', (req, res) => {

})

app.listen(port, function () {
    console.log('Listening on port ' + port + ' 👍')
})

