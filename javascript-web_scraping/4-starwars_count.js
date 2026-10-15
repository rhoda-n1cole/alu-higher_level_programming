#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }
  const results = JSON.parse(body).results;
  const count = results.filter((movie) => movie.characters.some((character) => (
    character.endsWith('/18/')
  ))).length;
  console.log(count);
});
