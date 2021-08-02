const express = require('express');
const axios = require('axios');
const app = express();
module.exports = app;
app.use(require('cors')());

const { Movie, Actor } = require('./db');


app.get('/', (req, res, next) => {
  res.status(200).send('Hello World')
});

app.get('/api/movies', async (req, res, next) => {
  const data = await Movie.findAll();
  res.send(data)
})

app.get('/api/actors', async (req, res, next) => {
  const data = await Actor.findAll();
  res.send(data)
})

module.exports = app;
