const express = require('express');
const app = express();
const { config } = require('./config');

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/year', (req, res) => {
  const { year } = req.query;
  const isDivisibleIntoFour = year % 4 === 0;
  const isDivisibleIntoOneHundred = year % 100 === 0;
  const isDivisibleIntoFourHundred = year % 400 === 0;
  if (!year) {
    res.send('You must indicate a year in the url with the key "year"');
  }
  if (
    isDivisibleIntoFour &&
    (!isDivisibleIntoOneHundred || isDivisibleIntoFourHundred)
  ) {
    res.send(`${year} es un año bisiesto`);
  } else {
    res.send(`${year} no es un año bisiesto`);
  }
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
