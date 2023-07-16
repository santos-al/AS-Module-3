// Assignment Code
function generatePassword() {

  // character length check for password
  var charLength = window.prompt("Select the number of character (must be between 8 and 128)");

  while (charLength < 8 || charLength > 128) {
    charLength = window.prompt("Try again, please select a number between 8 and 128");
  }

  // Question for uppercase in password
  let uppercase = window.confirm("Do you want uppercase letters in your password?");

  // Question for lowercase in password
  let lowercase = window.confirm("Do you want lowercase letters in your password?");

  // Check for numbers in the password
  let numeric = window.confirm("Do you want numbers in your password?");

  // Check for special characters in the password
  let specialChar = window.confirm("Do you want special characters in your password?");

  // check if at least uppercase or lowercase is selected or else loop back
  while (uppercase === false && lowercase === false && numeric === false && specialChar === false) {
    window.alert("At least one of the following must be selected: uppercase, lowercase, number, or special character.")
    uppercase = window.confirm("Do you want uppercase letters in your password?");
    lowercase = window.confirm("Do you want lowercase letters in your password?");
    numeric = window.confirm("Do you want numbers in your password?");
    specialChar = window.confirm("Do you want special characters in your password?");
  }

  // return `numeric = ${numeric}, specialChar = ${specialChar}, 
  //         uppercase = ${uppercase}, lowercase = ${lowercase}, 
  //         and charLength = ${charLength}`

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
