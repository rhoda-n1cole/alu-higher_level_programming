#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }
  const todos = JSON.parse(body);
  const completed = {};
  todos.forEach((todo) => {
    if (todo.completed) {
      completed[todo.userId] = (completed[todo.userId] || 0) + 1;
    }
  });
  console.log(completed);
});
