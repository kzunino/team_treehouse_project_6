const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
const {projects} = data;      //data.projects syntax.

router.get('/', (req, res) => {         //renders the main page
  res.render('index', {projects,
    id: projects[0].id,
    title: projects[0].project_name,
    photo: projects[0].image_urls[0]
  });
});

router.get('/project', (req, res) => {
  res.render('project');
});

module.exports = router;
