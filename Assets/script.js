// Assignment Code
function generatePassword() {

  // Password options
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijlmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChar = "~`!@#$%^&*()_+-={}|[]:;'<,>.?/";

  const allOptions = [uppercase, lowercase, numbers, specialChar];

  // character length check for password
  var charLengthCheck = window.prompt("Select the number of character (must be between 8 and 128)");

  while (charLengthCheck < 8 || charLengthCheck > 128) {
    charLengthCheck = window.prompt("Try again, please select a number between 8 and 128");
  }

  // Question for uppercase in password
  let uppercaseCheck = window.confirm("Do you want uppercase letters in your password?");

  // Question for lowercase in password
  let lowercaseCheck = window.confirm("Do you want lowercase letters in your password?");

  // Check for numbers in the password
  let numericCheck = window.confirm("Do you want numbers in your password?");

  // Check for special characters in the password
  let specialCharCheck = window.confirm("Do you want special characters in your password?");

  // check if at least uppercase or lowercase is selected or else loop back
  while (uppercaseCheck === false && lowercaseCheck === false && numericCheck === false && specialCharCheck === false) {
    window.alert("At least one of the following must be selected: uppercase, lowercase, number, or special character.")
    uppercaseCheck = window.confirm("Do you want uppercase letters in your password?");
    lowercaseCheck = window.confirm("Do you want lowercase letters in your password?");
    numericCheck = window.confirm("Do you want numbers in your password?");
    specialCharCheck = window.confirm("Do you want special characters in your password?");
  }

}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
