const myFirst = require("./myFirst");
const mySecond = require("./mySecond");
// console.log(myFirst.myMultiplier(5));
// console.log(mySecond.myMultiplier(5));
const fs = require("fs");
const result = myFirst.myMultiplier(14);
const result1 = `The value of 14 when passed through the myMultiplier function is( ${result}.)`;
fs.writeFile("results.txt", result1, function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
const results = mySecond.myMultiplier(14);
const results1 = `\n\nThe value of 14 when passed through the myMultiplier function is( ${results}.)`;
fs.appendFile("results.txt", results1, function (err) {
  if (err) throw err;
  console.log("Updated!");
});
