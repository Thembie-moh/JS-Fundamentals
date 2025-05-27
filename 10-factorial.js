#!/usr/bin/node

function factorial(n) {
  if (isNaN(p) || p <= 0) return 1;
  return p * factorial(p - 1);
}

const p = parseInt(process.argv[2]);

console.log(factorial(p));
