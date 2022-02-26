// object literal
const student = {
  name: "Marouf",
  age: 18,
};
// console.log(student);
// useing constructor
const person = new Object();
person.name = "hami";
// console.log(person);

const human = Object.create(person);
// console.log(human.name);

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People("hr", 26);
// console.log(peop);

//syntactical sugar
function Manus(name) {
  this.name = name;
}

const mane = new Manus("habi");
console.log(mane);
