// Setting up global variables
var generateBtn = document.querySelector("#generate");
var passwordTextArea = document.querySelector('#password');
const numerical = "0123456789";
const upper = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Begin generate password function
function generatePassword() {

let newPassword = '';
let passwordSet = '';
// Prompting user for input
charNum = parseInt(prompt("How many characters would you like your password to be? Minimum 8, maximum 128."));

// If statements for validation
if (!charNum){
  alert("You must enter a value!")
} else if (charNum < 9 || charNum > 129) {
  charNum = alert("Minimum of 8 characters, maximum of 128 characters.");
  return;
} 
confirmNum = confirm("Do you want your password to contain numbers?");
if (confirmNum) {
  passwordSet += numerical;
}
confirmChar = confirm("Do you want your password to contain special characters?");
if (confirmChar){
  passwordSet += special;
}
confirmLower = confirm("Do you want your password to contain lowercase letters?");
if (confirmLower){
  passwordSet += lower;
}
  confirmUpper = confirm("Do you want your password to contain uppercase letters?")
if (confirmUpper) {
  passwordSet += upper;
}

// for loop to generate password of desired length
if (charNum >= 8 && charNum <= 128){
  for (var i = 0; i < charNum; i++){
    newPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
  };
  localStorage.setItem("password", newPassword);
  let newPasswordStr = localStorage.getItem("password");
  passwordTextArea.textContent = newPasswordStr;
}
}

