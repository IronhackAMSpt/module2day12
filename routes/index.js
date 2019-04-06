const express = require('express');
const router  = express.Router();

const Message = require('../models/message');

/* GET home page */
router.get('/', (req, res, next) => {

  Message.findOne({_id: "5ca86e96ce7e4317f1034585"})
    .then(message => {
      res.render('index', { 
        message: message,
        title: "the message board"
      })
    })
});

module.exports = router;
