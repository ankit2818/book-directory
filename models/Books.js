const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    }
})

const Books = mongoose.model('books', BooksSchema)
module.exports = Books