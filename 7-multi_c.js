#!/usr/bin/node

const r = parseInt(process.argv[2]);

if (isNaN(r)) {
  console.log('Missing number of occurrences');
} else {
  for (let y = 0; y < r; y++) console.log('C is fun');
}