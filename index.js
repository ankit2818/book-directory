/** Uncomment beow line in development mode */
// require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const db = require('./database')
const app = express()

app.use(express.json())

/** get environment variables */
const PORT = process.env.PORT

/** connect to MongoDB */
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log(`DB Connected Sucessfully.`)
})

app.get('/', db.getAllBooks)
app.get('/get-book-by-id/:id', db.getBookById)
app.post('/add-book', db.addBook)
app.put('/update-book', db.updateBook)
app.delete('/delete-book/:id', db.deleteBook)

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})