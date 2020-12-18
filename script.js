// Setting up global variables
var generateBtn = document.querySelector("#generate");
var passwordTextArea = document.querySelector('#password');
var numerical = getRandomNum();
var upper = getRandomUpper();
var lower = getRandomLower();
var special = getRandomSpecial();

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


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



function generatePassword() {
// Prompting user for input
charNum = parseInt(prompt("How many characters would you like your password to be? Minimum 8, maximum 128."));

// If statement for validation
if (!charNum){
  alert("You must enter a value!")
} else if (charNum < 9 || charNum > 129) {
  charNum = parseInt(prompt("Minimum of 8 characters, maximum of 128 characters."));

} else {
  confirmNum = confirm("Do you want your password to contain numbers?");
  confirmChar = confirm("Do you want your password to contain special characters?");
  confirmLower = confirm("Do you want your password to contain lowercase letters?");
  confirmUpper = confirm("Do you want your password to contain uppercase letters?")
}
}