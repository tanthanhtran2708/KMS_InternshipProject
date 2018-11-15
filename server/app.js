'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// __dirname = base directory name
// path.join creates a path from string input
//app.use(express.static(path.join(__dirname, 'public')));

// REPLACE THIS WITH ROUTERS DEFINITION
// EXAMPLE:
// const aRoute = require('./routes/aRoute');
// app.use('/aRoute',aRoute);
app.use('/api', function (req, res) {
    res.send('API ROUTE');
})

//QUIZZ ROUTE
const quizzRoute=require('../server/routes/quizzRouter');
app.use('/quizz',quizzRoute);

const searchRoute = require('./routes/searchRoute');
app.use('/search',searchRoute);

const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg'
  ];

app.get('*', function (req,res) {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`../dist/${req.url}`));
    }
    else {
        res.sendFile(path.join(__dirname,'../dist/index.html'));
    }
})

// 404 ERROR HANDLER
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public/views','error404.html'));
});




module.exports = app;