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

const calcAgeArrow = (birthYear) => {
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
