var express = require('express');
var path = require('path');
var logger = require('morgan');
var multer = require('multer')();
var cors = require('cors');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/fileanalyse', [
  multer.single('upfile'),
  (req, res) => {
    const { originalname: name, mimetype: type, size } = req.file;
    res.json({
      name,
      type,
      size
    });
  },
]);

module.exports = app;
