// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // this declares the function "buildABear" with the dynamic properties inside the parentheses
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declares the variable greeting and interpolates the 'name' property
  var demographics = [name, age];
  //declares the variable demographics as the properties 'name' and 'age' together as an array
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declares the powerSaying as the string plus the variable specialPower and the string value " ?"
  var builtBear = {
    //declares the object variable built bear and opens the curly brackets
    basicInfo: demographics,
    //declares the key pair basicInfo with demographics,
    clothes: clothes,
    //declares the key pair clothes with clothes,
    exterior: fur,
    //declares the key pair exterior with fur,
    cost: 49.99,
    //declares the key pair cost with the static integers 49, 99
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //declares the key pair as an array with parameters and a string
    isCuddly: true,
    //declares the key pair isCuddly with a Boolean of true,
  };
  return builtBear
// calls the return of the var object builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');

//declares two object instances of the buildABear


//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // declares the function fizzBuzz with three dynamic properties
  for (var i = 0; i <= range; i++) {
// starts the for loop, with the initialization, condition, and update sections
// the variable i lets the computer know to start at the index position 0, t
//he range is the length of i, and the loop should iterate left to right or "up"
    if (i % num1 === 0 && i % num2 === 0) {
  //add the condition of if the i is % of num1 and is strictly equal to zero and i % of num2 is also strictly equal to zero
      console.log('fizzbuzz');
  // logs the string 'fizzbuzz' to the console if the condition is met
    } else if (i % num1 === 0) {
//if the above condition is not met, then the computer will check the loop conditional here
      console.log('fizz');
      // logs the string 'fizz' to the console if the condition is met
    } else if (i % num2 === 0) {
      //if the above condition is not met, then the computer will check the loop conditional here
      console.log('buzz');
        // logs the string 'buzz' to the console if the condition is met
    } else {
      // in none of the above conditionals are met
      console.log(i);
      //then the program dictacts to log the var i to the console
    }
    // closing curly brace of the else statement
  }
  //closing curly brace of the loop

}
//closing curly brace of the function
fizzBuzz(3, 5, 100);
// logs an object instance
fizzbuzz(5, 8, 400);
// logs an object instance
