/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
  }
else {
  bearClothing = "scarf";
  }

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 2) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
  }
else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
  }
else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
  }
else
  {
  console.log("You stay with the bear and become it's best friend!");
  }

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// The code is saying that if the user's doorChoice is 1, then the bearClothing will be a hat. If the door choice is not 1, then the bearClothing will be a scarf.


2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
it would still be a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

If the bearChoice was equal to 1 then you will have four options to procede. You can either offer the bear your bearClothing,
 tell the bear it's clothing is too small, run to the next room,
 or, if you make none of those choices, or an 'edge' choice, you will stay with the bear and become it's best friend.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The code would run the *else if* choice: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The outcome is the same.

7. What is your favorite ending?
*/ // You run as fast as you can into the next room. It's full of snakes!!!!
