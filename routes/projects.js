const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json'); //{data} referes to data.data
const {projects} = data;      //data.projects es6 syntax.

// router.get('/:id', (req, res) => {
//   const {id} = req.params;
//   console.log(id);
//   res.redirect(`/${id}`);
// });

router.get('/:id', (req, res) => {         //renders the main page
  const {id} = req.params;                //returns string
  let title = projects[parseInt(id)].project_name;
  let description = projects[id].descritpion;
  // let images =
  let projectData = {title, description}
  console.log(projectData);
  res.render('project', {projectData});
});

module.exports = router;
