#!/usr/bin/node

function add(y, x) {
  return y + x;
}

const y = parseInt(process.argv[2]);
const x = parseInt(process.argv[3]);

console.log(add(y, x));
