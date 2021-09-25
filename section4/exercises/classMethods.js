/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(name, protein, base, toppings) {
    this.name = name;
    this.protein = "steak";
    this.base = base;
    this.toppings = toppings;
  }
  changeProtein() {
    this.protein = "Soyrizo"
  }
addTopping(newTops) {
  this.toppings = this.toppings.push(newTops);

}
  // ADD CODE
};

var petesBurrito = new Burrito ("Pete", "steak", "black beans", ["sour Cream", "hot salsa", "cheese"]);
var jillsBurrito = new Burrito ("Jill","steak","rice & beans ", ["sour Cream", "salsa", "lettuce"]);
var jerrysBurrito = new Burrito ("Jerry", "chicken", "brown rice", ["green chili", "fajita veggies", "brown rice"])

console.log(jerrysBurrito);
console.log(jillsBurrito);
console.log(petesBurrito);
petesBurrito.changeProtein();
console.log(petesBurrito);

jillsBurrito.addTopping();
console.log(petesBurrito);
petesBurrito.addTopping();
console.log(jillsBurrito);
