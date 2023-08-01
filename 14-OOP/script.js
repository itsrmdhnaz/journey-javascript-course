// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   Never do this
//     this.calcAge = function () {
//       console.log(2023 - this.birthYear);
//     };
// };

// const ram = new Person('Ramadhan', 2009);
// console.log(ram);

// const uhuy = new Person('uhuy', 2037);
// const aslina = new Person('aslina', 2023);
// console.log(uhuy, aslina);

// const regi = 'regi';

// console.log(ram instanceof Person);
// console.log(regi instanceof Person);

// Person.hey = function () {
//   console.log(`Hey there`);
// };

// Person.hey();

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// ram.calcAge();
// uhuy.calcAge();

// console.log(ram.__proto__);
// console.log(ram.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ram));
// console.log(Person.prototype.isPrototypeOf(uhuy));

// Person.prototype.species = 'Homo Sapiens';
// console.log(ram.species, uhuy.species);

// console.log(ram.hasOwnProperty('firstName'));
// console.log(ram.hasOwnProperty('species'));

// console.log(ram.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 3, 6, 7, 8, 8, 10, 10, 10];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // Class expression
// // const PersonCL1 = class {};

// // Class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there`);
//   }
// }

// const rudi = new PersonCL('Rudi Astungkara', '2009');
// rudi.calcAge();
// console.log(rudi.age);

// console.log(rudi.__proto__ === PersonCL.prototype);

// rudi.greet();

// const walter = new PersonCL('Walter White', '2009');
// PersonCL.hey();

// const account1 = {
//   owner: 'ujang',
//   movements: [200, 300, 400, 8000, 900],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account1.latest);

// account1.latest = 50;
// console.log(account1.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const udin = Object.create(PersonProto);
// console.log(udin);

// udin.name = 'Udin';
// udin.birthYear = 2022;
// udin.calcAge();

// console.log(udin.__proto__ === PersonProto);

// const asep = Object.create(PersonProto);
// asep.init('Asep', 2012);
// asep.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// console.dir(Student);
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// console.dir(Student);

// const agil = new Student('Agil', 2020, 'Computer Science');
// console.log(agil);
// agil.introduce();
// agil.calcAge();

// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there`);
//   }
// }

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2023 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2023 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const fajar = new StudentCL('Fajar ujang', 2008, 'Math');
// fajar.introduce();
// fajar.calcAge();
// console.log(fajar);

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const udin = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const uhay = Object.create(StudentProto);
uhay.init('Uhay', 1928, 'Biology');
uhay.introduce();
uhay.calcAge;

class Account {
  //Public Fields (instance)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;

    console.log(`Thankd for opening an account , ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  //public interface
  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // this._approveLoan && (this.deposit(val), console.log(`Loan approved`));
    if (this._approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  // Private methods
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Ram', 'IDR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
Account.helper();
acc1.getMovements();
// acc1.#approveLoan(1000);
// console.log(acc1.#movements);
acc1.deposit(300).deposit(400).withdraw(350).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
