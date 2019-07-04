const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {     //render about page
  res.render('about');
})


module.exports = router;
