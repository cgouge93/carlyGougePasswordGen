// Assignment Code
var generateBtn = document.querySelector("#generate");


// Functions to generate characters for password
function getRandomNum() {

}

function getRandomUpper() {
  
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomSpecial() {

}

console.log(getRandomLower())




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
