/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/
var plants = ["alocasia", "monstera","philodendron"]


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);


// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals.splice(2);

animals.push("Gorilla");

console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.

animals.splice(2);
animals.push("Tarsier");

console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array

animals.push("Elephant");
console.log(animals);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)

var foodKinds = ["String Cheese","Cheddar Cheese","Swiss Cheese","Gouda Cheese"]
console.log(foodKinds);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.

console.log(foodKinds.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added

foodKinds.push("broccoli ): ")

console.log(foodKinds);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed

foodKinds.pop();
console.log(foodKinds);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added

foodKinds.push("Brie","Sharp Cheddar","Muenster Cheese")
console.log(foodKinds);

// YOU DO: Remove the food that is in index position 0.

foodKinds.shift();
console.log(foodKinds);

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: *Subreddits on Reddit*
// 2: *Playlists on Spotify* are lists of songs
// 3: *Currently watching on Netflix* is a list of what I have recently been interacting with


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger.
*/

// Write your conditional here

var percentBatteryLeft = 12;
var hasCharger = false;
var chargerType = "outlet";

// Declare the variable yesCharger which is
// assigned to the value of the both chargerType strictly equals "car" AND (conditional operator &&) hasCharger strictly equals true
var yesCharger = ((chargerType === "car") && (hasCharger === true));
// Declare yesBattery as percentBatteryLeft greater than 14
var yesBattery = (percentBatteryLeft >14);

//Check to see if yesCharger and yesBattery are able to communicate with the variables they are tied to
console.log(yesCharger);
console.log(yesBattery);

// Conditional one, if yesBattery is strictly true, then log the happy message
if (yesBattery === true) {
console.log("You can call an Uber!");
}
//Conditional two, if the above returns false, check to see if yesCharger is strictly true, if yes then log the happy message
else if (yesCharger === true) {
console.log("You can call an Uber!");
}
//final conditional, if none of the above logs true, then log the sad message
else {
  console.log("Get walkin'!");
}



// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
