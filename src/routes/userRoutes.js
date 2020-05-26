const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/list', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (e) {
    res.status(500).send({ error: e.messsage })
  }
})

router.post('/add', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(200).send("Added succesfully!")
  } catch (e) {
    res.status(400).send({ error: e.message })
  }
})

module.exports = router