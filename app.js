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
}
