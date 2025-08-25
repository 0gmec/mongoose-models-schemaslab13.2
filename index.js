const express = require('express')
const app = express()
require('dotenv').config()

const bookRoutes = require('./routes/bookRoutes')

app.use(express.json())


app.use('/api/books', bookRoutes)


const PORT = process.env.PORT || 8888
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))