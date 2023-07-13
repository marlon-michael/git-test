const express = require('express')
const mongo = require('mongoose')
require('dotenv').config()


const mongoURL = process.env.DATABASE_URL
mongo.connect(mongoURL)

const database = mongo.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('@ database connected')
})

const app = express()
app.use(express.json())
app.listen(3000, () => {
    console.log('@ server started at ${3000}')
})
