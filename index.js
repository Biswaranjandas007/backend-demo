require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('dbiswaranjan')
})

app.get('/login', (req, res) => {
    res.send("<h1>Hii welcome to login page </h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai Or Code</h2>")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})