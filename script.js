// Assignment code here
var passwordlength = 0;
var lowercaseletters = ("abcdefghijklmnopqrstuvwxyz");
var uppercaseletters= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("0123456789");
var specialchar = ("`~!@#$%^&*()_+-=[{]}\|;:',<.>/?");
var array = [];
var x = 0;
var password =[];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  choice = confirm("want to make a password?");
  if (choice != true){
    return;
  } 
  choice = prompt("what length?");
  if((choice >= 8) && (choice <= 128)){
    console.log(choice);
    passwordlength = choice;
    console.log(passwordlength);
  } else {
    alert("please enter a number 8 - 128");
    return
  }
  choice = confirm("want lowercase letters?");
  j=0;
   if(choice == true){
    array = array + lowercaseletters;
    console.log("added lower case", array);
    random = Math.floor(Math.random() * 25);
    password[j]= array[random];
    console.log(password);
    j++;
  }
  choice = confirm("want uppercase letters?");
  if(choice == true){
    array = array + uppercaseletters;
    console.log("added upper",array);
    random = Math.floor(Math.random() * 25);
    password[j]= uppercaseletters[random];
    console.log(password);
    j++;
  }
  choice = confirm("want numbers?");
  if(choice == true){
    array = array + numbers;
    console.log("added numbers",array);
    random = Math.floor(Math.random() * 9);
    password[j]= numbers[random];
    console.log(password);
    j++;
  }
  choice = confirm("want special characters?");
  if(choice == true){
    array = array+ specialchar;
    console.log("added specia char",array);
    random = Math.floor(Math.random() * 30);
    password[j] = specialchar[random];
    console.log(password);
    j++;
  }
    
    console.log("pre password after all",password);
    for (var i= j; i <= passwordlength-1; i++ ) {
      random = Math.floor(Math.random() * array.length);
      password[i] = array[random];
    }
    
    console.log("final",password);
    alert(password);
    //make  a for loop to convert to string?
    password = password.join("");
    console.log("after join",password);
    alert(password);
    array.length = 0;
    password.length = 0;
    console.log("after reset",password);
    console.log("after reset",array);
    return;
    
    
    
    
    //var password = generatePassword() 
    
  

  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
