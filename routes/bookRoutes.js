const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.post('/', async(req,res)=>{
    try{
        const newBook = await Book.create(req.body)
        res.status(201).json(newBook)
    }catch (error) {
        res.status(400).json({error: 'Failed to create book', details: error.message})
    }
})

router.get('/', async (req,res)=> {
    try{
        const allBooks = await Book.find({})
        res.status(201).json(allBooks)
    }catch (error) {
res.status(400).json({error: 'Failed to find all books'})
    }
})

router.get('/:id', async(req,res)=> {
    try{
        const bookId = await Book.findById(req.body)
        res.status(201).json(bookId)
    }catch (error){
        res.status(400).json({error: 'Failed to find book'})
    }
})

router.put('/:id', async(req,res)=> {
    try{
        const updateBookId = await Book.findByIdAndUpdate(bookIdToUpdate, req.body)
        res.status(201).json(updateBookId)
    }catch (error) {
        res.status(400).json({error: 'Failed to update book'})
    }
})

router.delete('/:id', async(req,res)=> {
    try{
        const deleteBookId = await Book.findByIdAndDelete()
        res.status(201).json(deleteBookId)
    }catch (error) {
        res.status(400).json({error: 'Failed to delete book'})
    }
})

module.exports = router