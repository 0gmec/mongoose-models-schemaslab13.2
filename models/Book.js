const mongoose = require ('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    title: {
        type: String, required: [true, "Title"]
    },
    author: {
        type: String, required: [true,  "Author"]
    },
    publicationDate: Date,
    inStock: {
        type: Boolean,
        default: true
    },

    
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book