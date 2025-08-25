const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())


app.use('/api/books')


const PORT = process.env.PORT || 8888
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))