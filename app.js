'use strict';

console.log('Loaded app.js');

function add(a, b) {
  return a + b;
}

function whatever(input) {
  if (!input) {
    console.log('invalid input');
    return;
  }

  return input.substring(0,1);
}
