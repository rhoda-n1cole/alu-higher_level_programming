#!/usr/bin/node
const fs = require('fs');
fs.readFile(process.argv[2], (error, paragraph) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(paragraph.toString('utf8'));
});
