// Creates array of possible characters for the password
var alphaBi = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var alphaSm = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symb = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','?','{','}','<','>'];
var num = ['0','1','2','3','4','5','6','7','8','9'];

// Links "Generate Password" button to the the JS variable of generate button
var generateBtn = document.querySelector("#generate");

// Creates function that takes user input and maps through the array characters.
function generatePassword () {

  var passLength = parseInt(prompt('How many characters would you like your password to have? (Between 8-128 characters)'));
    if (passLength < 8 || passLength > 128 ) {
    passLength = parseInt(prompt("Choose another value between 8 and 128."));
    return;
  }
  let inNum = confirm('Would you like numbers?');
  let inUpper = confirm('Would you like UPPERCASE letters?');
  let inLower = confirm('Would you like lowercase letters?');
  let inSymb = confirm('Would you like symbols?');

  var password = "";

  for ( var i = 0; i < passLength; i++) {

		if(inNum && password.length < passLength) {
			password += randomizer(num);
		}
    if(inUpper && password.length < passLength) {
			password += randomizer(alphaBi);
		}
		if(inLower && password.length < passLength) {
			password += randomizer(alphaSm);
		}
		if(inSymb && password.length < passLength) {
			password += randomizer(symb);
		}

  }
  return password;
};

//  Randomizes password with array variables
function randomizer(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var rndm = arr[index];
    return rndm;

}
    function getRandom(){
    Math.random().toString(passLength).slice(passLength);
    }
 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.textContent = password;



  console.log("Password " + password +" has been generated!");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)