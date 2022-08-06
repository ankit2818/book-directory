const isEmpty = require('./isEmpty')

const validateBook = book => {
    let errors = {}
    if(isEmpty(book.title)) {
        errors.title = "Title is required."
    }
    if(isEmpty(book.author)) {
        errors.author = "Author is required."
    }
    if(isEmpty(book.year)) {
        errors.year = "Year is required."
    }
    if(isEmpty(book.language)) {
        errors.langauge = "Language is required."
    }
    if(isEmpty(book.description)) {
        errors.description = "Description is required."
    }
    if(isEmpty(book.category)) {
        errors.category = "Category is required."
    }
    if(isEmpty(book.cover)) {
        errors.cover = "Cover is required."
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateBook