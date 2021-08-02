const express = require('express');
const app = express();
module.exports = app;


app.get('/', (req, res, next) => {
  res.status(200).send('Hello World')
});


module.exports = app;
