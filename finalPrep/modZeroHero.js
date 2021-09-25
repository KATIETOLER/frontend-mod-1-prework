// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Superman";
var specialAbility = "Fly";

// Declare two variables - greeting AND catchphrase
var greeting = ("Do you need help? " + "I'm " + heroName);
var catchphrase = " I'm not Clark Kent! ";

console.log(greeting + ` And I can ${specialAbility}`);

//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 100;

var fullPower = (power * 500);
var fullEnergy = (energy + 150);

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Lex Luthor", "Brianiac", "DoomsDay"]
var sidekicks = ["Talon", "Superboy", "Supergirl"]
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Bizarro");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.pop();
sidekicks.push("Superdog")
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse

function assessSituation(dangerLevel,saveTheDay,badExcuse) {
  if (dangerLevel >= 50) {
    console.log(badExcuse);
  }
  else if ((dangerLevel >10) && (dangerLevel <50)) {
    console.log(saveTheDay);
  }
  else {
    console.log("Meh. Hard pass.");
  }
}
assessSituation(10,"I did it! ", " I think I left the oven on...");

// - dangerLevel should be an integer
// - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';
assessSituation(99, announcement, excuse)
console.log(assessSituation);
// Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse)
console.log(assessSituation);
//> should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse)
console.log(assessSituation);
//> should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
var scaryMonster = {
  name: "Lois Lane",
  smell: "Chanel no. 5",
  citiesDestroyed: ["New York", "L.A.", "Indianapolis"],
  weight: 120,
  luckyNumbers: [99,67,34,16,33],
  address: {
    number: 9810,
    street: "Melrose Pl.",
    state: "New York",
    zip: 70123,
  }
}
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor (name,superpower,age){
  this.name = name;
  this.superpower = superpower;
  this.age = age;
  this.archNemesis = "The Syntax Error";
  this.powerLevel = 100;
  this.energyLevel = 50;
}
sayName (name) {
  console.log(name)
  }
maximizeEnergy (energyLevel)
  {
  this.energyLevel=1000;
  }
gainPower (){
  this.powerLevel++;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var spiderMan = new SuperHero ("Spiderman", "Websurfing", 16,[],[],[])
console.log(spiderMan);
spiderMan.sayName();
spiderMan.maximizeEnergy();
spiderMan.gainPower();
console.log(spiderMan);

var mysterio = new SuperHero ("Mysterio", "Deception", 45, [],[],[])
console.log(mysterio);

// Reflection
// What parts were most difficult about this exerise?
//---
// The if/else statements still feel a little fuzzy to me.
//I still have to check that my syntax is correct and sometimes it does not work and I am not sure why.
//Also some of the syntax for adding methods to objects is a little weird but I keep figuring it out so its not so bad!

// What parts felt most comfortable to you?
//Making objects makes a lot of sense to me. I feel comfortable with all the beginning stuff!

// What skills do you need to continue to practice before starting Mod 1?
//Methods inside objects and if/else statements.
