/*
class Dog {
  constructor(name, breed, dob) {
    this.name = name;
    this.breed = breed;
    this.birthday = new Date(dob);
  }
}

const benjie = new Dog("benjie", "yorkie", "01/01/2011");
console.log(benjie);

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const epoch = new Date(diff);
    return Math.abs(epoch.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static sum(x, y) {
    return this.x + this.y;
  }
  static yearsInBetween(date1, date2) {
    const iniDate = new Date(date1);
    const endDate = new Date(date2);
    const diff = endDate.getTime() - iniDate.getTime();
    const epoch = new Date(diff);
    return epoch.getFullYear() - 1970;
  }
}



const hilary = new Person("Hilary", "Rodham", "26/Oct/1947");
*/

class Fruit {
  constructor(name, color, calories) {
    this.name = name;
    this.color = color;
    this.calories = calories;
  }

  info() {
    return `this ${this.color} ${this.name} contains ${
      this.calories
    } calories of raw energy!`;
  }
}

class Smoothie extends Fruit {
  constructor(name, color, calories, size, hasMilk) {
    super(name, color, calories);

    this.size = size;
    this.hasMilk = hasMilk;
  }
  countCalories() {
    let totalCals;
    if (this.size === "grande") {
      totalCals = Number.parseInt(this.calories) * 3;
    } else if (this.size === "mediano") {
      totalCals = Number.parseInt(this.calories);
    } else {
      totalCals = this.calories + 20;
    }
    return totalCals;
  }
}

bananaSmoothie = new Smoothie("platano", "amarillo", 89, "grande", true);
