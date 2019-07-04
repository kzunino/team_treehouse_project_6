const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json'); //{data} referes to data.data
const {projects} = data;      //data.projects es6 syntax.

router.get('/:id', (req, res, next) => {         //renders the main page
  const {id} = req.params;                      //returns string
  if (projects[id]){
    let title = projects[id].project_name;
    let description = projects[id].descritpion;
    let images = projects[id].image_urls;
    let technologies = projects[id].technologies;
    let liveLink = projects[id].live_link;
    let gitHubLink = projects[id].github_link;
    let projectData = {title, description, images, technologies, liveLink, gitHubLink};
    res.render('project', {projectData});
  }else{
    const err = new Error('Project does not exist');  //creates new error object 
    err.status = 404;
    next(err);
}
});

module.exports = router;
