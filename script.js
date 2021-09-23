//main arrays
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const special = ['!','@','#','$','%','^','&','*','?'];
const numbers = ['1','2','3','4','5','6','7','8','9'];


//arrays to be pushed to with different functions
let options = [];
let passwordArray = [];


//variables confirmed by popup
let passwordLength;  //number of characters in password (input by text)
let checkedUpper; //true or false
let checkedLower;  //true or false
let checkedSpecial; //true or false
let checkedNumbers; //true or false

//TODO: Create prompt for input of password length. Input must be a number and must be between 8 and 128 

function chooseLength() {
  do {
    passwordLength = parseInt(window.prompt('How Long Do You Want Your Password to Be? Choose a number between 8 and 128 characters', ""));
  } while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
};

//TODO: Create popups/confirms for uppercase, lowercase, special and numbers. Check that user confirmed at least one of the types

function userInput() {
  checkedUpper = window.confirm('Do you want Upper Case Letters?');
  checkedLower = window.confirm('Do you want Lower Case Letters?');
  checkedNumbers = window.confirm('Do you want Numbers?');
  checkedSpecial = window.confirm('Do you want Special Characters?');
  if (!checkedUpper && !checkedLower && !checkedNumbers && !checkedSpecial) {
    alert("Must choose at least one");
    userInput();
  }
};


// Check for truthiness of each main array and if true push too options array
function generateOptions() {
  if (checkedUpper) {
    options.push(...upperCase);
  }
  if (checkedLower) {
    options.push(...lowerCase);
  }
  if (checkedSpecial) {
    options.push(...special);
  }
  if (checkedNumbers) {
    options.push(...numbers);
  }
};


// function to get a random value from the options array
function getOptions () {
  return options[Math.floor(Math.random() * options.length)]
};


//Function with which to compare arrays for common elements
function findCommonElement(array1, array2) {
  for(let i = 0; i < array1.length; i++) { // Loop for array1
    for(let j = 0; j < array2.length; j++) { // Loop for array2
      if(array1[i] === array2[j]) { // Compare the element of each and every element from both of the arrays
        return true;  // Return if common element found
      }
    }
  }
  return false; // Return if no common element exist
}


// Check if array Passwords includes elements from uppercase, lowercase, special and numbers
function checkPassword() {    
  if (checkedUpper) {
    // compare to passwordArray
    var a = findCommonElement(passwordArray, upperCase)
  } else {
    a = 'N/A';
  }
  if (checkedLower) {
    // compare to passwordArray
    var b = findCommonElement(passwordArray, lowerCase)
  }  else {
    b = 'N/A';
  }
  if (checkedSpecial) {
    // compare to passwordArray
    var c = findCommonElement(passwordArray, special)
  } else {
    c = 'N/A';
  }
  if (checkedNumbers) {
    // compare to passwordArray
    var d = findCommonElement(passwordArray, numbers)
  } else {
    d = 'N/A';
  }
  if (!a || !b || !c || !d) {
    return false;
  } else {
    return true;
  }
}


//This is the generatePassword Function
function generatePassword() {
  passwordArray = [];
  for(i=0; i<passwordLength; i++) {
    passwordArray.push(getOptions());
  }
  if (checkPassword()) {
    return passwordArray.join('');
  } else {
    return generatePassword();
  }
};


//**************************************************************** */
// Upon loading the webpage
chooseLength();
userInput();
generateOptions();

var generateBtn = document.querySelector("#generate");

//Click that button
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);