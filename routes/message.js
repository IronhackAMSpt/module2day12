const express = require('express');
const router  = express.Router();

const Message = require('../models/message');

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
    res.send(message)
  })
  .catch(err => {
    console.log(err);
  })

})

module.exports = router;
