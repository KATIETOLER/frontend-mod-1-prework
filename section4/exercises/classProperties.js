/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog

class Dog {
  }

var bullDog = new Dog()
console.log(bullDog)

// Prompt 2: Snack
class Snack {
  }

var chocolate = new Snack();
console.log(chocolate);

// Prompt 3: Shirt
class Shirt {
  }

var polo = new Shirt ();
console.log(polo);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class BigDog {
  constructor() {
    this.breed = "Bull Dog";
    this.food = "Kibbles & Bits";
    this.walk = 3;
  }
}

var bullDog = new BigDog()
console.log(bullDog);

// Prompt 2: Snack
class HealthySnack {
  constructor() {
  this.vegetable = "kale";
  this.granola = "Vanilla Granola";
  this.butter = "Sun Butter";
  }
}

var celery = new HealthySnack();
console.log(celery);

// Prompt 3: Shirt
class Top {
constructor() {
  this.buttons = "No buttons";
  this.collar = "No collar";
  this.sleeves = "Sleeves cut off";
  }
}
var tank = new Top();
console.log(tank);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.
  // Prompt 1: Dog

  class SmallDog {
    constructor(breed,food,walkNums) {
      this.breed = breed;
      this.food = food;
      this.walk = walkNums;
    }
  }

  var beagle = new SmallDog("beagle", "kibble", 3)
  console.log(beagle);

  // Prompt 2: Snack

  class TrashSnack {
    constructor(isFried,dip,chips) {
    this.isFried = isFried;
    this.dip = dip;
    this.chips = chips;
    }
  }

  var lays = new TrashSnack(true, "Ranch", "Lays Potato Chips");
  console.log(lays);

  // Prompt 3: Shirt

  class TShirt {
  constructor(buttons,collar,sleeves) {
    this.buttons = buttons;
    this.collar = collar;
    this.sleeves = sleeves;
    }
  }

  var tank = new TShirt (false,false,false);
  console.log(tank);
