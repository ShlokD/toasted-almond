'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use('/dist', express.static(path.resolve(__dirname, '../../dist')));

app.disable('x-powered-by');
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started");
});

var render = require('./ssr.js').render;

app.get('/', function (req, res) {
  var response = render('React SSR with Vanilla JS on client');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});