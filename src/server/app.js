
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.resolve(__dirname, '../../dist')));

app.disable('x-powered-by');
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

const render = require('./ssr.js').render;

app.get('/', (req, res) => {
  const response = render('React SSR with Vanilla JS on client');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
