const fs = require('fs')
const express = require('express')
const app = express()
const dbConfigs = require('./knexfile.js')
const db = require('knex')(dbConfigs.development)
const path = require('path')

const port = 5000

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