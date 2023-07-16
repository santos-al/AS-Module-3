// Assignment Code
testArray = ["6", "7", "8", "9"]; 
// legnth = 4
console.log(testArray.length);
console.log(testArray);
testArray.splice("7");
console.log(testArray);

function generatePassword() {

  // Password options
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijlmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChar = "~`!@#$%^&*()_+-={}|[]:;'<,>.?/";
  let allOptions = ""
  password = ""


  // sets all default criteria to false
  let uppercaseCheck = false;
  let lowercaseCheck = false;
  let numericCheck = false;
  let specialCharCheck = false;




  // character length check for password
  let charLength = Number(window.prompt("Select the number of character (must be between 8 and 128)"));

  while (!(charLength >= 8) || !(charLength <= 128)) {
    charLength = Number(window.prompt("Try again, please select a number between 8 and 128"));
  }
  // Make sure charLength is a number

  // Question for uppercase in password
  uppercaseCheck = window.confirm("Do you want uppercase letters in your password?");

  // Question for lowercase in password
  lowercaseCheck = window.confirm("Do you want lowercase letters in your password?");

  // Check for numbers in the password
  numericCheck = window.confirm("Do you want numbers in your password?");

  // Check for special characters in the password
  specialCharCheck = window.confirm("Do you want special characters in your password?");

  // check if at least uppercase or lowercase is selected or else loop back
  while (uppercaseCheck === false && lowercaseCheck === false && numericCheck === false && specialCharCheck === false) {
    window.alert("At least one of the following must be selected: uppercase, lowercase, number, or special character.")
    uppercaseCheck = window.confirm("Do you want uppercase letters in your password?");
    lowercaseCheck = window.confirm("Do you want lowercase letters in your password?");
    numericCheck = window.confirm("Do you want numbers in your password?");
    specialCharCheck = window.confirm("Do you want special characters in your password?");
  }

  // Checks which criteria weren't selected and removes them from "allOptions"
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
