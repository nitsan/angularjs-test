'use strict';
/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const movies = require('./movies.json');


const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/../src')));

app.use('/movies', (req, res) => {
    res.json(movies);
});

const port = 3000;
app.listen(port, function () {
    console.log('app listening on port: ' + port);
});

module.exports = app;
