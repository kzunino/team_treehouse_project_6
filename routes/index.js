const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
const {projects} = data;      //data.projects syntax.

router.get('/', (req, res) => {         //renders the main page
  res.render('index', {projects});
});

module.exports = router;
