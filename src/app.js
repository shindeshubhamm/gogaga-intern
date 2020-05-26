const path = require('path')
const express = require('express')
const userRoutes = require('./routes/userRoutes')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

// Recognize as json
app.use(express.json({ extended: false }))

// Directory Path
const publicDirectoryPath = path.join(__dirname, "../public/")

// Static route
app.use('/gogaga', express.static(publicDirectoryPath))

// api endpoints routes
app.use('/api', userRoutes)

// 404 Handeling
app.get('*', (req, res) => {
  res.send('<h1 align="center">It seems that you have lost!</h1>')
})

// Run application on port configured.
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})