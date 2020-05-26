const path = require('path')
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

// Directory Paths
const publicDirectoryPath = path.join(__dirname, "../public/")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Routes
// Lists of friends
app.get('/gogaga/list.html', (req, res) => {
  res.render('list.hbs')
})

// Form to enter data
app.get('/gogaga/add.html', async (req, res) => {
  res.render('add.hbs')
})

// 404 Handeling
app.get('/*', (req, res) => {
  res.send('It seems that you are lost.')
})

// Run application on port configured.
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})