// Assignment Code
var generateBtn = document.querySelector("#generate")
var clearBtn = document.querySelector("#clear")

// Define passOptions as password character types
var passOptions = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numEric: "0123456789",
  specialChars: "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
}

// passTemp and passW are temporary variables to pass along data
var passTemp = ""
var passW = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

  if (password != null) {
    document.getElementById("password").innerHTML = password
  }

}

// Main password generator function
function generatePassword(){
  // Defines password length with passLength function
  var passwordLength = passLength()

  // Defines password character types with charType function
  var passwordOptions = charType()

  // For loop that randomly selects characters from the charTypes selected
  for (var x = 0; x <= passwordLength; x++){
    var pSelect = Math.floor(Math.random()*passTemp.length+1)
    passW += passTemp.charAt(pSelect)
  }

  // Returns new password
  return passW
}

// Function to set password length
function passLength() {
    // Password length window prompt
    var pLength = window.prompt("Please enter password length (min 8, max 128):","8")
  
    // If user pressed Cancel, immediately end function
    if (!pLength) {
      return;
    } 
    // Test if pLength is Not a Number (isNaN) or if its less than 8 or greater than 128
    else if (isNaN(pLength) || pLength < 8 || pLength > 128){
      alert ("Entered value is not a valid number. Please retry.")
      passLength()
    } 
    // Return Password Length if entry is valid
    else {
      return pLength
    } 

}

// Function to determine characters to include in password
function charType() {  
  // Confirm to include lowercase
  var lCase = window.confirm("Include lowercase?")

  if (lCase) {
    passTemp += passOptions.lowerCase;
  } 

  // Confirm to include uppercase
  var uCase = window.confirm("Include uppercase?")

  if (uCase) {
    passTemp += passOptions.upperCase;
  }

  // Confirm to include numbers
  var numCase = window.confirm("Include numbers?")

  if (numCase) {
    passTemp += passOptions.numEric;
  }

  // Confirm to include special characters
  var specCase = window.confirm("Include special characters?")

  if (specCase) {
    passTemp += passOptions.specialChars;
  }

  // Confirm if any types were selected
  if (!lCase && !uCase && !numCase && !specCase) {
    alert("You must select at least one type of password options to include! [lowercase, uppercase, numbers, special characters]")
    charType()
  }

  // Return list of characters included for password selection
  return passTemp  
}

function clearText() {
  // Clear any previous passwords generated
  document.getElementById("password").value = ""

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
clearBtn.addEventListener("click", clearText)
