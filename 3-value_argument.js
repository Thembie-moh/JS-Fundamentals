#!/usr/bin/node

const argument = process.argv.slice(2);

if(argument.length === 0) {
console.log("No argument");
} else if (argument.length === 1) {
  console.log(args[0]);
} else {
  console.log(argument.join(''));
}