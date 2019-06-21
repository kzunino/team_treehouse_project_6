const express = require('express');
const router = express.Router();
//const {data} = require('../data/data.json');

router.get('/', function (req, res) {         //renders the main page
  res.render('index');                    //renders index.pug
})

module.exports = router;
