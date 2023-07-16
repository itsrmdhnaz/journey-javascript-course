////////////////////////////////////////////////
//LECTURE: Functions

/*
Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
*/
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

/*
Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/ 
const indonesia = describeCountry('Indonesia', 200, "Jakarta");
const japan = describeCountry('Japan', 125.7, "Tokyo");
const switzerland = describeCountry("Switzerland",8.7,'Bern');

console.log(indonesia);
console.log(japan);
console.log(switzerland);


//end of LECTURE: Functions
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Function Declarations vs. Expressions

/*
The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
*/


/*
To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
*/
function percentageOfWorld1(population) {
 const worldPopulation = 7900;
 const percentage = (population / worldPopulation) * 100;
 return percentage
}

/*
Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
*/
console.log(percentageOfWorld1(200));
console.log(percentageOfWorld1(125.7));
console.log(percentageOfWorld1(8.7));

/* 
Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage;
}

console.log(percentageOfWorld2(200));
console.log(percentageOfWorld2(125.7));
console.log(percentageOfWorld2(8.7));

// end of LECTURE: Function Declarations vs. Expressions
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Arrow Functions

/*
Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const worldPopulation = 7900;
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

console.log(percentageOfWorld3(200));
console.log(percentageOfWorld3(125.7));
console.log(percentageOfWorld3(8.7));

// end of LECTURE: Arrow Functions
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Functions Calling Other Functions
/* 
Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'

To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
*/
const describePopulation = (country, population) => {
    return `${country} has ${population} million people, so it's about ${percentageOfWorld1(population).toFixed(1)}% of the world population`;
}

/*
Call 'describePopulation' with data for 3 countries of your choice
*/

console.log(describePopulation("Indonesia", 200));
console.log(describePopulation("Japan", 125.7));
console.log(describePopulation("Switzerland", 8.7));

// end of LECTURE: Functions Calling Other Functions
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////

////////////////////////////////////////////////
//

// 
////////////////////////////////////////////////


