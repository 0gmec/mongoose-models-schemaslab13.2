const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

app.post('/', async(req,res)=>{
    try{
        const newBook = await Book.create(req.body)
        res.status(201).json(newBook)
    }catch (error) {
        res.status(400).json({error: 'Failed to create book', details: error.message})
    }
})

app.get('/', async (req,res)=> {
    try{
        const allBooks = await Book.find({})
        res.status(201).json(allBooks)
    }catch (error) {
res.status(400).json({error: 'Failed to find all books'})
    }
})