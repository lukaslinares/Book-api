//DEPENDANCIES
const mongoose = require('mongoose')
const {Schema} = mongoose

//SCHEMA
const bookSchema = new Schema ({
    title: String,
    description: String,
    year: Number,
    quantiy: Number,
    imageURL: String
})

//EXPORT
const Book = mongoose.model('Book', bookSchema)
module.exports = Book