#!/usr/bin/node

//Write a script that prints a message depending on number of arguments 

const args = process.argv;

if (args.length <= 2) {
  console.log("No argument");
} else if (args.length === 3){
  console.log("Argument found");
}else {
  console.log("Arguments found");
}