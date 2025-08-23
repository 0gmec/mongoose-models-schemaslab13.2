const mongoose = require ('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    title: {
        type: String, required: [true, "hi"]
    },
    author: {
        type: String, required: [true,  "who is hi"]
    },
    publicationYear: Number,
    inStock: {
        type: Boolean,
        default: true
    },

    
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book