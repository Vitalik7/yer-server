const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

const config = require('./config');
const commentRouter = require('./api/comments/router');

const db = require('./api/db');
app.listen(config.port, function () {
  console.log(`Server running at port: ${config.port}`)
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Add headers
app.use(function (req, res, next) {

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1', commentRouter);

// error handling
app.use(function (req, res, next) {
  const err = new Error(`Not Found ${req.path}`);
  err.status = 404;
  next(err)
});
app.use(function (error, req, res, next) {
  if (error) {
    console.log(error);
    return res.status(400).json({error})
  }
  next(error)
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
});

module.exports = app;
