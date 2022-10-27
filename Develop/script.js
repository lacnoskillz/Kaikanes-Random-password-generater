// Assignment code here
var passwordlength = 0;
var lowercaseletters;
var uppercaseletters;
var numbers;
var specialchar;
var array = [];
var x = 0;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  choice = confirm("want to make a password?");
  if (choice != true){
    return;
  } 
  choice = prompt("what length?");
  if((choice >= 8) && (choice < 128)){
    console.log(choice);
    passwordlength = choice;
    console.log(passwordlength);
  } else {
    console.log("please enter a number 8 - 128");
    return
  }
  choice = confirm("want lowercase letters?");
    lowercaseletters = choice;
    console.log(lowercaseletters);
  choice = confirm("want uppercase letters?");
    uppercaseletters = choice;
    console.log(uppercaseletters);
  choice = confirm("want numbers?");
    numbers = choice;
    console.log(numbers)
  choice = confirm("want special characters?");
    specialchar= choice;
    console.log(specialchar);
  if((lowercaseletters == false) && (uppercaseletters == false) && (numbers == false) && (specialchar == false)){
    alert("please confirm whether or not to include at LEAST ONE of the following lowercase, uppercase, numeric, special characters ");
    alert("try again");
    return
  } else {
    array.length = passwordlength;
    console.log("array length",array);
  }
    if( lowercaseletters == true) {
      x= x+1
    } if (uppercaseletters == true) {
      x= x+1;
    } if (numbers == true) {
      x= x+1;
    } if (specialchar == true) {
      x= x+1;
    }
    console.log("number of true statements",x);

   
  
  








  //var password = generatePassword()
    
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
