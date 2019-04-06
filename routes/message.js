const express = require('express');
const router  = express.Router();

const Message = require('../models/message');

const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAILUSER,
    password: process.env.EMAILPASS
  }
})

// GET /message/all
router.get('/all', (req, res, next) => {
  Message.find({})
    .then(messages => {
      res.send(messages);
    })
    .catch(err => {
      console.log(err)
    })
});

// POST /message/add
router.post('/add', (req, res) => {
  Message.create({
    title: req.body.title,
    body: req.body.body
  })
  .then(message => {
    transport.sendMail({
      from: "no-reply <no-reply@ironhack.com>",
      to: "jorg.vanderham@ironhack.com",
      subject: "the subject",
      text: `a new message has been posted: ${message}`
    })
    res.send(message)
  })
  .catch(err => {
    console.log(err);
  })

})

module.exports = router;
