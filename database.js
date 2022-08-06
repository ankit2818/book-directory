/** get models */
const Books = require('./models/Books')

/** get utility functions */
const validateBook = require('./utils/bookValidate')
const isEmpty = require('./utils/isEmpty')

/** Get all Books */
const getAllBooks = (req, res) => {
    try {
        Books
        .find()
        .then(books => res.status(200).json(books))
        .catch(err => res.status(500).json(err.message))

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

/** Get a book by Id */
const getBookById = (req, res) => {
    try {
        const {id} = req.params
        /** Return error if id field is missing */
        if(isEmpty(id)) {
            return res.status(400).json({id: "Id is required."})
        }
        Books
        .findById(id)
        .then(book => {
            if(isEmpty(book)) {
                return res.status(404).json({msg: `No Book found with given id: ${id}`})
            }
            return res.status(200).json(book)
        })
        .catch(err => res.status(500).json(err))

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

/** Insert a book with all values, refer Books Model for all required details */
const addBook = (req, res) => {
    try {
        const { errors, isValid } = validateBook(req.body)
        /** Return error if any or all field is missing */
        if(!isValid) {
            return res.status(400).json(errors)
        }
        const {title, author, category, year, language, description, cover} = req.body
        const newBook = new Books({
            title,
            author,
            category,
            year,
            language,
            description,
            cover
        })
        newBook
        .save()
        .then(newBook => res.status(201).json(newBook))
        .catch(err => res.status(500).json(err))

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

/** Update a book */
const updateBook = (req, res) => {
    try {
        const { errors, isValid } = validateBook(req.body)
        /** Return error if any or all field is missing */
        if(!isValid) {
            return res.status(400).json(errors)
        }
        const {id, title, author, category, year, language, description, cover} = req.body
        if(isEmpty(id)) {
            return res.status(400).json({id: "Id is Required."})
        }
        const modifyBook = {
            title,
            author,
            category,
            year,
            language,
            description,
            cover
        }
        /** update only if book already exists */
        Books
        .findById(id)
        .then(book => {
            if(!isEmpty(book)) {
                Books
                .findByIdAndUpdate(
                    id,
                    {$set: modifyBook},
                    {new: true}
                )
                .then(book => res.status(200).json(book))
                .catch(err => res.status(500).json(err))
            } else {
                return res.status(403).json({msg: "Not Allowed."})
            }
        })
        .catch(err => res.status(500).json(err))
        

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

/** Delete a book using Id */
const deleteBook = (req, res) => {
    try {
        const {id} = req.params
        if(isEmpty(id)) {
            return res.status(400).json({id: "Id is Required."})
        }
        /** delete only if book already exists */
        Books
        .findById(id)
        .then(book => {
            if(!isEmpty(book)) {
                Books
                .findByIdAndDelete(id)
                .then(book => res.status(200).json({msg: `Successfully deleted book with Id: ${book.id} and Title: ${book.title}`}))
                .catch(err => res.status(500).json(err))
            } else {
                return res.status(404).json({msg: "No book found with given id to delete."})
            }
        })
        .catch(err => res.status(500).json(err))
        

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    getBookById,
    deleteBook,
}