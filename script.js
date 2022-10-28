// Assignment code here
var passwordlength = 0;
var lowercaseletters;
var uppercaseletters;
var numbers;
var specialchar;
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
      x= x+1;
      lowercaseletters = ("abcdefghijklmnopqrstuvwxyz");
    } if (uppercaseletters == true) {
      x= x+1;
      uppercaseletters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } if (numbers == true) {
      x= x+1;
      numbers = ("0123456789");
    } if (specialchar == true) {
      x= x+1;
      specialchar = ("`~!@#$%^&*()_+-=[{]}\|;:',<.>/?");
    }
    console.log("number of true statements", x);
    console.log('lowercaseletters value: ' + lowercaseletters);
    console.log('uppercaseletters value: ' + uppercaseletters);
    console.log('numbers: ' + numbers);
    console.log('special chars: ' + specialchar);
    
    
    
    
    if ((lowercaseletters != false) && (uppercaseletters == false) && (numbers == false) && (specialchar == false)) { 
    for (var i =0; i <= passwordlength-1; i++){
    lowercaseletterschoice = Math.floor(Math.random() * 25);
    console.log('index of lowercase: ' +lowercaseletterschoice);
    //console.log(lowercaseletterschoice);
    lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
    //console.log(lowercaseletterschoice);

    password[i]= lowercaseletterschoice;
    
    }
   
   console.log('in lowercase only password: ' + password);

    }
    
    if ((lowercaseletters != false) && (uppercaseletters != false) && (numbers == false) && (specialchar == false)) {
      
      lowercaseletterschoice = Math.floor(Math.random() * 25);
      lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
      password[0]= lowercaseletterschoice;
      
      uppercaseletterschoice = Math.floor(Math.random() * 25);
      uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
      password[1]= uppercaseletterschoice;
      
      for (var i =2; i <= passwordlength-1; i++){
        randomchartype = Math.floor(Math.random() * 2);
        console.log(randomchartype);
        if (randomchartype == 0){
          lowercaseletterschoice = Math.floor(Math.random() * 25);
          lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
          password[i]= lowercaseletterschoice;
        } else if (randomchartype == 1){
          uppercaseletterschoice = Math.floor(Math.random() * 25);
          uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
          password[i]= uppercaseletterschoice;
        }


      }
      console.log('in lowercase and uppercase' +password);
    alert(password);
      return;
    }
    
    if ((lowercaseletters != false) && (uppercaseletters != false) && (numbers != false) && (specialchar == false)){
      
      lowercaseletterschoice = Math.floor(Math.random() * 25);
      lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
      password[0]= lowercaseletterschoice;
      
      uppercaseletterschoice = Math.floor(Math.random() * 25);
      uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
      password[1]= uppercaseletterschoice;

      numberschoice = Math.floor(Math.random() * 9);
      numberschoice = numbers[numberschoice];
      password[2]= numberschoice; 

      for (var i =3; i <= passwordlength-1; i++){
        randomchartype = Math.floor(Math.random() * 3);
        console.log(randomchartype);
        if (randomchartype == 0){
          lowercaseletterschoice = Math.floor(Math.random() * 25);
          lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
          password[i]= lowercaseletterschoice;
        } else if (randomchartype == 1){
          uppercaseletterschoice = Math.floor(Math.random() * 25);
          uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
          password[i]= uppercaseletterschoice;
        }
        if (randomchartype == 2){
          numberschoice = Math.floor(Math.random() * 9);
          numberschoice = numbers[numberschoice];
          password[i]= numberschoice;
        }

      }



      console.log('In lowercase, uppercase, and numbers' + password);
    alert(password);

    }

    if ((lowercaseletters != false) && (uppercaseletters != false) && (numbers != false) && (specialchar != false)){
      lowercaseletterschoice = Math.floor(Math.random() * 25);
      lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
      password[0]= lowercaseletterschoice;
      
      uppercaseletterschoice = Math.floor(Math.random() * 25);
      uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
      password[1]= uppercaseletterschoice;

      numberschoice = Math.floor(Math.random() * 9);
      numberschoice = numbers[numberschoice];
      password[2]= numberschoice; 

      specialcharchoice = Math.floor(Math.random() *30);
      specialcharchoice = specialchar[specialcharchoice];
      password[3]= specialcharchoice; 
  
  
      for (var i =4; i <= passwordlength-1; i++){
        randomchartype = Math.floor(Math.random() * 4);
        console.log(randomchartype);
        if (randomchartype == 0){
          lowercaseletterschoice = Math.floor(Math.random() * 25);
          lowercaseletterschoice = lowercaseletters[lowercaseletterschoice];
          password[i]= lowercaseletterschoice;
        } else if (randomchartype == 1){
          uppercaseletterschoice = Math.floor(Math.random() * 25);
          uppercaseletterschoice = uppercaseletters[uppercaseletterschoice];
          password[i]= uppercaseletterschoice;
        }
        else if (randomchartype == 2){
          numberschoice = Math.floor(Math.random() * 9);
          numberschoice = numbers[numberschoice];
          password[i]= numberschoice;
        }
        else if (randomchartype == 3){
          specialcharchoice = Math.floor(Math.random() * 30);
          specialcharchoice = specialchar[specialcharchoice];
          password[i]= specialcharchoice;
        }

      }
  
  
      console.log('In lowercase, uppercase, numbers, and special char' + password);
      alert(password);
  
    }
      //var password = generatePassword() 
    
  

  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
