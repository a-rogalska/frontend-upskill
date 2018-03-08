var express = require('express');
var app = express();
const path = require('path');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
});

app.get('/1/1', function (req, res) {
  res.sendFile('1.html', {root: path.join(__dirname, '/1/')});
});

app.get('/1/2', function (req, res) {
  res.sendFile('2.html', {root: path.join(__dirname, '/1/')});
});

app.get('/1/3', function (req, res) {
  res.sendFile('3.html', {root: path.join(__dirname, '/1/')});
});

app.get('/1/4', function (req, res) {
  res.sendFile('4.html', {root: path.join(__dirname, '/1/')});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});