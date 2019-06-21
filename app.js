const express = require('express');
const app = express();

app.set('view engine', 'pug');              //sets view (templates) engine to pug
app.use('/static', express.static('public'));

const mainRoute = require('./routes');

app.use(mainRoute);     // links mainRoute file to render main page


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
