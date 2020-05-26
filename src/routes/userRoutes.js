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
    res.status(200).send({ msg: "Added succesfully!" })
  } catch (e) {
    if (e.message.includes("dup key")) {
      return res.status(400).send({ error: "Friend with email already exists!" })
    }
    res.status(500).send({ error: "Couldn't add friend! Check your internet connection and try again" })
  }
})

module.exports = router