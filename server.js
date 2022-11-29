//DEPENDANCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

//MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

//INDEX
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// BOOKS 
const booksController = require('./Controllers/books.js')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})