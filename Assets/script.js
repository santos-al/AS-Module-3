// Assignment Code
function generatePassword() {
  let numer = false;
  let specialChar = false;

  // character length check for password
  var charLength = window.prompt("Select the number of character (must be between 8 and 128)");
  while (charLength < 8 || charLength > 128) {
    charLength = window.prompt("Try again, please select a number between 8 and 128");
  }
  // Question for uppercase in password
  let uppercase = window.confirm("Do you want uppercase letters in your password?");
  // Question for lowercase in password
  let lowercase = window.confirm("Do you want lowercase letters in your password?");
  // check if at least uppercase or lowercase is slected or else loop back
  while (uppercase === false && lowercase === false) {
    window.alert("At least either uppercase or lower case must be selected, choose again.")
    uppercase = window.confirm("Do you want uppercase letters in your password?");
    lowercase = window.confirm("Do you want lowercase letters in your password?");
  }
  return `lowercase is ${lowercase} and uppercase is ${uppercase}`;
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
