////////////////////////////////////////////////
//LECTURE: Values and Variables

//Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
//let country = 'Indonesia'; //string value (''), country is a constant value look at lecture let, const and var for the reason

// let continent = 'Asia'; //string value (''), continent is a constant value look at lecture let, const and var for the reason

let population = 200; //integer value because 10 is a number, and population can be changed
//look at LECTURE: let, const and var why some code change to comment

//Log their values to the console
//console.log(country); //indonesia
//console.log(continent); //Asia
console.log(population); //200 means 200 million population
// end LECTURE: Values and Variables
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Data Types

//Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
//let isIsland = true; //boolean value, because (true), isIsland is a constant value, look at lecture let, const and var for the reason
let language; //just declaration variable will output undefined

//Log the types of 'isIsland', 'population', 'country' and 'language' to the console
//console.log(typeof isIsland); //boolean value, because isIsland value is (true) that is boolean value
console.log(typeof population); //integer value, because population value is (10) that is integer
//console.log(typeof country); //string value, because country value is ('Indonesia') that is string value
console.log(typeof language); //undefined value, because language value haven't been assigned yet

// end of LECTURE: Data Types
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: let, const and var

//Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = "Bahasa Indonesia";

//Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = "Indonesia";
//statement country must be constant value, country of person possible to be changed but for now
//just think someone hard to change their country or cannot change their country

const continent = "Asia"; // statement continent must be constant value, because indonesia is constant in Asia continent

const isIsland = true;
//statement isIsland must be const value, because according to country that indonesia isIsland is true
//and cannot be changed because we can look at the maps that indonesia is island country.

//Try to change one of the changed variables now, and observe what happens
//continent = 'europe';, this is must be error because continent is a constant value
//why? because indonesia is in asia not in europe continent.

// end of LECTURE: let, const and var
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Basic Operators

//If your country split in half, and each half would contain half the population, then how many people would live in each half?
const halfPopulation = population / 2; //why devided by two because want to get the half population 1/2
console.log(halfPopulation); //console the result

//Increase the population of your country by 1 and log the result to the console
population++;
console.log(population); //console the result

//Finland has a population of 6 million. Does your country have more people than Finland?
const findlandPopulation = 6;
console.log(population > findlandPopulation); //true because indonesia have 200 million people + 1 million for the increment

//The average population of a country is 33 million people. Does your country have less people than the average country?
const averagePopulation = 33;
console.log(population < averagePopulation); //false because indonesia have more people than the average population of the country

//Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// end of LECTURE: Basic Operators
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Strings and Template Literals

description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

// end of LECTURE: Strings and Template Literals
////////////////////////////////////////////////

////////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements

//If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is  ${33 - population} million below average`);
}

// After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
population = 13;
population = 130;

// end of LECTURE: Taking Decisions
////////////////////////////////////////////////

////////////////////////////////////////////////
// LECTURE: Type Conversion and Coercion

// Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// end of LECTURE: Type Conversion and Coercion
////////////////////////////////////////////////

////////////////////////////////////////////////
//

//
////////////////////////////////////////////////
