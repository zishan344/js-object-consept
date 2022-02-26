const student = {
  name: "marouf",
  age: 18,
  home: "ctg",
  isClean: true,
};

//start for in loop
for (const prop in student) {
  console.log(prop);
}

// const keys = Object.keys(student);
// // console.log(keys);
// for (const prop of keys) {
//   //   console.log(prop, student[prop]);
// }6

// const entris = Object.entries(student);
// for (const [key, value] of entris) {
//   console.log(key, value);
// }
