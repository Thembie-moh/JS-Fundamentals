#!/usr/bin/node

const argument = process.argv;

if (argument.length <= 2) {
console.log("No argument");
} else {
  console.log(argument.slice(2).join(' '));
}