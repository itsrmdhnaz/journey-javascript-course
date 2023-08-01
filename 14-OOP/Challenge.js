/////////////////////////////////////////////////
// Challenge #1

/**
 * Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
 */
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

/**
 * Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
 */
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

/**
 * Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
 */
Car.prototype.brake = function () {
  this.speed -= 5;
};

/**
 * Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
 */
const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake();
// End of Challenge #1
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Challenge #2

/**
 * Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
 */
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }
  /**
     * Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
  */
  get speedUS() {
    return this.speed / 1.6;
  }

  /**
     * Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
     */
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

/**
 * Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
 
 Test data:
§ Data car 1: 'Ford' going at 120 km/h
 */
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 25;

console.log(ford);
// End of Challenge #2
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Challenge #3
/**
 * Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
 */
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

console.dir(EV.prototype.constructor);

/**
 * . Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
 */
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

/**
 * Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
 */
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

/**
 * Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �

Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
 */
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
console.log(tesla);
tesla.brake();
tesla.chargeBattery(90);

// End of Challenge #3
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Challenge #4

/**
 * Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
 */
class EVCL extends CarCl {
  /**
   * Make the 'charge' property private
   */
  #charge;

  /**
     * Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
     */
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

/**
 * Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
 */
const rivian = new EVCL('Rivian', 120, 23);
rivian.accelerate().chargeBattery(75).brake();
console.log(rivian);

console.log(rivian.speedUS);

// End of Challenge #4
/////////////////////////////////////////////////
