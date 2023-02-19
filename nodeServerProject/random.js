function random() {
  let randomNumber = Math.floor(Math.random() * 500);
  //console.log(randomNumber);
  return randomNumber;
}
random();
module.exports.random = random;
