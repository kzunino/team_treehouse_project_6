const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');                     //sets view (templates) engine to pug
app.use('/static', express.static('public'));     //serves the static folders in public folder
app.use(bodyParser.urlencoded({ extended: false}));

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects');
app.use(mainRoute);                                  // links mainRoute file to render main page
app.use('/about', aboutRoute);                       //path parameter makes it so you don't need to put path param inside router.get in respective file
app.use('/projects', projectRoute);


app.use(( err, req, res, next ) => {
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600)
    res.status(err.status);
  else
    res.status(500);
  res.render('error');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
})
