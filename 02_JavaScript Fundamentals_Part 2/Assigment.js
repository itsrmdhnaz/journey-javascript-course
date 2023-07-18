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
//LECTURE: Introduction to Arrays

/* 
Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
*/
const populations = [200, 125.7, 8.7, 30];

//Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);

/*
Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/
const percentages = [];
percentages.push(percentageOfWorld1(populations[0]).toFixed(1));
percentages.push(percentageOfWorld1(populations[1]).toFixed(1));
percentages.push(percentageOfWorld1(populations[2]).toFixed(1));
percentages.push(percentageOfWorld1(populations[3]).toFixed(1));

console.log(percentages);

// end of LECTURE: Introduction to Arrays
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Basic Array Operations (Methods)

/*
Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
*/
const neighbours = ["Indonesia", "Malaysia", "Singapore", "Australia"];

/*
At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
*/
neighbours.push("Utopia");

/*
Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
*/
neighbours.pop();

/*
If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
*/
!neighbours.includes("Germany") ? console.log('Probably not a central European country :D') : null;

/**
 * Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'
 */
neighbours[neighbours.indexOf("Indonesia")] = "Republic of Indonesia"; 

console.log(neighbours);

// end of LECTURE: Basic Array Operations (Methods)
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Introduction to Objects

/**
 * Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
 */
const myCountry = {
    country : "Indonesia",
    capital : "Jakarta",
    language : "Bahasa Indonesia",
    population : 200,
    neighbours : ["Malaysia", "Singapore", "Philippines", "Australia"]
}

// end of LECTURE: Introduction to Objects
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Dot vs. Bracket Notation

/**
 * Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
 */
console.log(`${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

/**
 * Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation
 */

myCountry.population += 2;
myCountry["population"] -= 2;

// end of LECTURE: Dot vs. Bracket Notation
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Object Methods

/**
 * Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
 */
myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
}
//Call the 'describe' method
myCountry.describe();

/**
 * Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
 */
myCountry.checkIsland = function(){
    this.isIsland = this.neighbours,length > 0 ? false : true;
}


// end of LECTURE: Object Methods
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Iteration: The for Loop

/**
 * There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
 */
for(let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// end of LECTURE: Iteration: The for Loop
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Looping Arrays, Breaking and Continuing

//Let's bring back the 'populations' array from a previous assignment
const populations2 = [200, 125.7, 8.7, 30];

/**
 * Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
 */
const percentages2 = [];
for(let population = 0; population < populations2.length; population++){
    percentages2.push(percentageOfWorld1(populations2[population]).toFixed(1));
}

/**
 * Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
 */

console.log(percentages);
console.log(percentages2);

// end of Looping Arrays, Breaking and Continuing
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Looping Backwards and Loops in Loops

/**
 * Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
 */
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

/**
 * Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
 */
/**
 * You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway �
 */
for(let i = 0; i < listOfNeighbours.length; i++){
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// end of LECTURE: Looping Backwards and Loops in Loops
////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: The while Loop

/**
 * Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
 */
const populations3 = [200, 125.7, 8.7, 30];
const percentages3 = [];
let population = 0;

while(population < populations3.length) {
    percentages3.push(percentageOfWorld1(populations3[population]).toFixed(1));
    population++;
}

console.log(percentages);
console.log(percentages2);
console.log(percentages3);

/**
 * Reflect on what solution you like better for this task: the for loop or the while
loop?
 */

const myOpinion = `I love for looping for now because the .length method help me if i confuse about how many want to looping for`;
//im soory for my english:v

// end of LECTURE: The while Loop
////////////////////////////////////////////////


