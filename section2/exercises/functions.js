/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
  };

printName();
printName();
printName();
printName();

// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function ohHello () {
  console.log("Oh, Hello!")
  }


ohHello();
ohHello();

//
function calculateArea(number) {
  return numberOne * numberTwo;
}



var numberOne = 10;
var numberTwo = 200;


console.log( calculateArea(numberOne, numberTwo) )

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greatMe(name1,name2,name3){
console.log(name1, "I am so pleased to meet you!")
console.log(name2, "I am so pleased to meet you!")
console.log(name3, "I am so pleased to meet you!")
};

greatMe("Jim", "Jimmy", "Jimmerson");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function numberArgue(a,b) {
  console.log(a+b);
}

numberArgue(10,22)
numberArgue(10,33)
numberArgue(10,77)

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function cuteDogs(puppyOne, pupyTwo) {
console.log("The cutest puppies are of course " + puppyOne + " and who can forget " + puppyTwo + ".");
}

cuteDogs("Butter", "Bread");
cuteDogs("Popcorn", "Caramel");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?
- I named  the function cuteDogs, because I thought it would be descriptive of what I wanted to log while not being too long.
- I named the parameters pupyOne and pupyTwo  because it was short and descriptive of where in the code I wanted them to be.




*/
