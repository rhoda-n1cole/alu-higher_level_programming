#!/usr/bin/node
const fs = require('fs');
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  fs.writeFile(process.argv[3], body, 'utf8', (writeError) => {
    if (writeError) {
      console.log(writeError);
    }
  });
});
