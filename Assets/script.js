// Assignment Code
function generatePassword() {

  // Password options
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijlmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChar = "~`!@#$%^&*()_+-={}|[]:;'<,>.?/";
  let allOptions = ""
  password = ""

  // character length check for password
  let charLength = Number(window.prompt("Select the number of character (must be between 8 and 128)"));

  while (!(charLength >= 8) || !(charLength <= 128)) {
    charLength = Number(window.prompt("Try again, please select a number between 8 and 128"));
  }
  // Make sure charLength is a number

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

  // Checks which criteria were selected and adds them from "allOptions"
  if (uppercaseCheck === true) {
    allOptions += uppercase;
  }
  if (lowercaseCheck === true) {
    allOptions += lowercase;
  }
  if (numericCheck === true) {
    allOptions += numbers;
  }
  if (specialCharCheck === true) {
    allOptions += specialChar;
  }

  // Takes all the possible options to create the password and adds them to "password". This repeats until the "charLength is equal to 0"
  for (i = charLength; i > 0 ; i--) {
   password += allOptions[Math.floor(Math.random() * (allOptions.length - 1))];
  }

  return password;
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
