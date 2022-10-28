// Assignment code here
var passwordlength = 0;
var lowercaseletters = ("abcdefghijklmnopqrstuvwxyz");
var uppercaseletters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("0123456789");
var specialchar = ("`~!@#$%^&*()_+-=[{]}\|;:',<.>/?");
var array = [];
var password = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //asks users what to include in password and if they say yes to one it will put 1 random charecter into the password
  choice = confirm("want to make a password?");
  if (choice != true) {
    return;
  }
  choice = prompt("what length?");
  if ((choice >= 8) && (choice <= 128)) {
    console.log("user chosen length", choice);
    passwordlength = choice;
    console.log("verify var password.length", passwordlength);
  } else {
    alert("please enter a number 8 - 128");
    return
  }
  choice = confirm("want lowercase letters?");
  var j = 0;
  if (choice == true) {
    array = array + lowercaseletters;
    console.log("added lower case", array);
    random = Math.floor(Math.random() * 25);
    password[j] = array[random];
    console.log("adding atleast one lowercase to password:", password);
    j++;
  }
  choice = confirm("want uppercase letters?");
  if (choice == true) {
    array = array + uppercaseletters;
    console.log("added upper", array);
    random = Math.floor(Math.random() * 25);
    password[j] = uppercaseletters[random];
    console.log("adding atleast one uppercase to password:", password);
    j++;
  }
  choice = confirm("want numbers?");
  if (choice == true) {
    array = array + numbers;
    console.log("added numbers", array);
    random = Math.floor(Math.random() * 9);
    password[j] = numbers[random];
    console.log("adding atleast one number to password:", password);
    j++;
  }
  choice = confirm("want special characters?");
  if (choice == true) {
    array = array + specialchar;
    console.log("added specia char", array);
    random = Math.floor(Math.random() * 30);
    password[j] = specialchar[random];
    console.log("adding atleast one special character to password:", password);
    j++;
  }
  //if user says no to all choices aborts function
  if (j < 1) {
    alert("please select atleast one type of character");
    alert("try again");
    return;
  }

  console.log("pre password after all choices", password);
  //randomly selects characters from the array we built according to what the user wanted and stores those random values into a new array password
  for (var i = j; i <= passwordlength - 1; i++) {
    random = Math.floor(Math.random() * array.length);
    password[i] = array[random];
  }

  console.log("final password", password);

  //converts the random array password to string
  password = password.join("");
  console.log("after converting array", password);
  alert("your password: " + password);



//takes password and displays it on site
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  /*reset passwork and array if user wants to make another one*/
  //password.length=0; 
  // array.length=0;         not sure why these diddnt work

  password = [];
  array = [];
  console.log("after reset", password);
  console.log("after reset", array);





  return;










}

// runs writepassword function on click
generateBtn.addEventListener("click", writePassword);
