// Assignment Code
var generateBtn = document.querySelector("#generate");


// Functions to generate characters for password
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomSpecial() {
  const special = '!@#$%^&*(){}[]=<>/,.';
  return special[(Math.floor(Math.random() * special.length))]
}

console.log(getRandomLower())
console.log(getRandomUpper())
console.log(getRandomNum())
console.log(getRandomSpecial())



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
