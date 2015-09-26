function Food(name, energy, hunger, health) {
    this.name = name;
    this.energy = energy;
    this.hunger = hunger;
    this.health = health;
}

var burger = new Food("Burger", -5, 10, 1);
var waffles = new Food("Vegan Corn Waffles", 10, 1, -3);
var beer = new Food("Microbrew Beer", 15, -5, -5);
var quinoa = new Food("Quinoa", 15, 1, 1);
var edamame = new Food("Edamame", 5, 2, 2);
var sweets = new Food("Sweets", 5, 0, -5);
var doner = new Food("Doner Kebap", 10, 5, -10);