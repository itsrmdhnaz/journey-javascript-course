// "use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 2000 && birthYear <= 2010) {
//       var genz = true;
//       const firstName = "ujang";
//       const str = `oh, and you are gen, ${firstName}`;
//       console.log(str);

//       output = `NEW OUTPUT!!`;

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(str);
//       console.log(genz);
//       console.log(add(3, 3));
//       console.log(output);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = "Ramadhan";
// calcAge(2004);

// // console.log(me);
// // console.log(job);
// // console.log(year);

// // var me = "Ramadhan";
// // let job = "student";
// // const year = 2004;

// function addDeclr(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(numProducts);
// !numProducts ? deleteShoppingCart() : null;

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("delete all products");
// }

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(2004);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(2004);

const ramadhan = {
  year: 2004,
  calcAge() {
    console.log(this);
    console.log(2023 - this.year);
  },
};

ramadhan.calcAge();

const uhuy = {
  year: 2010,
};

uhuy.calcAge = ramadhan.calcAge;

uhuy.calcAge();

const f = jonas.calcAge;
f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
