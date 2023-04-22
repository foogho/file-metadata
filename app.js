var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/file', (req, res) => {
  res.json({ message: 'reading file ...' });
});

module.exports = app;
