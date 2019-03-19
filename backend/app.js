const express = require('express');
const app = express();

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

app.use((req, res, next) => {
  console.log('First middleware');
  next();
})

app.use( (req, res, next) => {
  console.log('Second middleware');
  next();
});

app.get('/test', (req, res, next) => {
  console.log('youve reached the test page')
  res.send({
    message: 'howdy'
  });
})


module.exports = app;
