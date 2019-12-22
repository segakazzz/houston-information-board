const express = require('express')
const app = express()
const cors = require('cors')


const { getAllPosts } = require('./src/db/posts')
const port = 5000

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
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    getAllPosts().then((allPosts)=>{
        res.send({
            data: allPosts,
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