const first = { b: 2, a: 1, c: 2 };
const second = { c: 2, b: 2, a: 1 };
// 1st step ata tik tak moto kaj korena

/* if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log("it is equal");
} else {
  console.log("it is different");
} */

/* function compare(obj1, obj2) {
  for (const prop in obj1) {
    if (obj1[prop].length !== obj2[prop].length) {
      return false;
    }
  }
  return true;
}
console.log(compare(first, second));
 */
function compearObje(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj1).length) {
    return false;
  }
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}
console.log(compearObje(first, second));
