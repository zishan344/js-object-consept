const student = {
  name: "marouf",
  age: 18,
  home: "ctg",
  isClean: true,
};

// console.log(student);

// gettin all properties names
const keys = Object.keys(student);
// console.log(keys);

// get all values
const values = Object.values(student);
// console.log(values);

//gettin all keys and values
const keyValuePerars = Object.entries(student);
// console.log(keyValuePerars);

//seal the object
// const seal = Object.seal(student);

// freeze the Object
const freeze = Object.freeze(student);
//delete object properties
delete student.isClean;
console.log(student);
