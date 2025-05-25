const argument = process.argv[2];
const number = Number(argument);
if (!isNaN(number)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
