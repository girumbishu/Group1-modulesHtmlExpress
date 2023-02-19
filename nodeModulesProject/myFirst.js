//console.log("my first module");
function myMultiplier(a) {
  let multiply = a * 2;
  return multiply;
}
//console.log(myMultiplier(4));
module.exports.myMultiplier = myMultiplier;
