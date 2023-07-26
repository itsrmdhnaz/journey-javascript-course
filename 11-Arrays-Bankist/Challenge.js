////////////////////////////////////////////////////////////////////////
// Challenge #1

/**
 * 1. Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
 */

const checkDogs = (dogsJulia, dogsKate) => {
  /**
   * 2. Create an array with both Julia's (corrected) and Kate's data
   */
  const dogJuliaCorrected = dogsJulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(-1);
  const dogs = dogJuliaCorrected.concat(dogsKate);

  /**
 * 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
 */
  dogs.forEach((dog, i) => {
    const str =
      dog > 3 ? `is an adult, and is ${dog} years old` : 'is still a puppy';
    console.log(`Dog number ${i + 1} ${str} 🐶`);
  });

  console.log(dogs);
};

/**
 * 4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// end of Challenge #1
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #2

/**
 * Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
 */
const calcAverageHumanAge = ages => {
  /**
     * 1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
     */
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  /**
     * 2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
     */
  const adults = humanAges.filter(age => age >= 18);

  /**
     * 3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
     */
  //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length; u can use this also
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

/**
 * 4. Run the function for both test datasets
 * Data 1: [5, 2, 4, 1, 15, 8, 3]
 * Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg);
console.log(avg2);

// end of Challenge #2
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #3

/**
 * 1. Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
 */
const calcAverageHumanAge2 = ages => {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};

/**
 * 2. Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */
const avgArrow = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avgArrow2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avgArrow);
console.log(avgArrow2);

// end of Challenge #3
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/**
 * 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
 */
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

/**
 * 2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
 */
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood < dogSarah.recFood ? 'litlle' : 'much'
  }`
);

/**
 * 3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
 */
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

/**
 * 4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
 */
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

/**
 * 5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
 */
console.log(dogs.some(dog => dog.curFood === dog.recFood));

/**
 * 6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
 */
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

/**
 * 7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
 */
console.log(dogs.filter(checkEatingOkay));

/**
 * 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)
 */
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recFood - b.recFood)
  .map(dog => dog.recFood);
console.log(dogsSorted);

// end of Challenge #4
////////////////////////////////////////////////////////////////////////
