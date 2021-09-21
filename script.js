// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let checkedUpper //true or false
let checkedLower  //true or false
let checkedSpecial //true or false
let checkedNumbers //true or false
let length; //number


const upperCase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
const lowerCase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
const special = [!,@,#,$,%,^,&,*,?];
const numbers = [1,2,3,4,5,6,7,8,9];
const options = [];
const passwordArray = [];

// Check for truthiness of each main array and if true push too options array
function generateOptions() {
  if (checkedUpper) {
    options.push( ...upperCase)
  }
  if (checkedLower) {
    options.push( ...lowerCase)
  }
  if (checkedSpecial) {
    options.push( ...special)
  }
  if (checkedNumbers) {
    options.push( ...numbers)
  }
}

// function to get a random value from the options array
function getOptions () {
  return options[Math.floor(Math.random() * options.length)]
}

function findCommonElement(array1, array2) {
  // Loop for array1
  for(let i = 0; i < array1.length; i++) {
      // Loop for array2
      for(let j = 0; j < array2.length; j++) {
          // Compare the element of each and
          // every element from both of the
          // arrays
          if(array1[i] === array2[j]) {
              // Return if common element found
              return true;
          }
      }
  }
  // Return if no common element exist
  return false; 
}

function generatePassword() {
  for(i=0; i<length; i++) {
    passwordArray.push(getOptions)
  }
  // Check if array Passwords includes elements from uppercase, lowercase, special and numbers
  if (upperCase) {
    // compare to passwordArray
    findCommonElement(passwordArray[i], upperCase[j])
  }
  if (lowerCase) {
    // compare to passwordArray
    findCommonElement(passwordArray[i], lowerCase[j])
  }
  if (special){
    // compare to passwordArray
    findCommonElement(passwordArray[i], special[j])
    }
  if (numbers) {
    // compare to passwordArray
    findCommonElement(passwordArray[i], numbers[j])
  }
  return passwordArray.toString
  } else { 
    //Repeat function??
  }
}





