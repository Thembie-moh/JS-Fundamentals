#!/usr/bin/node
const args = process.argv;

console.log(args[2] !== undefined ? args[2] : 'No argument');
