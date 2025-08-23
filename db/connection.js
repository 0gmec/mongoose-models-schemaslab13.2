const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
mongoose.connect('mongodb+srv://mlsfiles75:6X8rygGSEK0KLHCC@cluster0.qo5izmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Connection error', err))