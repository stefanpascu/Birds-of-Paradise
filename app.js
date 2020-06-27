const express = require('express')
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
const port = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup public folder
app.use(express.static('./public'));

// setup body parser for requests
app.use(bodyParser.json());

// routes

// main pages
app.get('/', function (req, res) {
  res.render('pages/home')
});
app.get('/bibliography', function (req, res) {
  res.render('pages/bibliography')
});
app.get('/contact', function (req, res) {
  res.render('pages/contact')
});
app.get('/generas', function (req, res) {
  res.render('pages/generas')
});
app.get('/odds', function (req, res) {
  res.render('pages/odds')
});
app.get('/quiz', function (req, res) {
  res.render('pages/quiz')
});
app.get('/test', function (req, res) {
  res.render('pages/test')
});
app.post('/login', function (req, res) {
  if (req.body.username.length > 0 && req.body.password.length > 0) {
    let responseBody = {
      "isLoggedIn": true,
      "name": req.body.username
    };

    res.send(JSON.stringify(responseBody));
  }
  else
    res.send('{"isLoggedIn": false}');
});

// page not found
app.get('*', function(req, res){
  res.status(404);
  res.render('pages/404');
});

// create application on port 8080
app.listen(port, () => console.log(`App started on ${port}!`));