////////////////////////////////////////////////
//LECTURE: Values and Variables

//Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
//let country = 'Indonesia'; //string value (''), country is a constant value
// let continent = 'Asia'; //string value (''), continent is a constant value
let population = 200; //integer value because 10 is a number, and population can be changed
//see LECTURE: let, const and var why some code change to comment

 //Log their values to the console
 console.log(country); //indonesia
 console.log(continent); //Asia
 console.log(population); //200 means 200 million population
 // end LECTURE: Values and Variables
 ////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: Data Types

//Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
//let isIsland = true; //boolean value, because (true), isIsland is a constant value, see lecture let, const and var
 let language; //just declaration variable will output undefined

 //Log the types of 'isIsland', 'population', 'country' and 'language' to the console
 console.log(typeof isIsland); //boolean value, because isIsland value is (true) that is boolean value
 console.log(typeof population); //integer value, because population value is (10) that is integer
 console.log(typeof country);  //string value, because country value is ('Indonesia') that is string value
 console.log(typeof language); //undefined value, because language value haven't been assigned yet

 // end of LECTURE: Data Types
 ////////////////////////////////////////////////

////////////////////////////////////////////////
//LECTURE: let, const and var

//Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'Bahasa Indonesia';

//Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = 'Indonesia'; 
//statement country must be constant value, country of person possible to be changed but for now
//just think someone hard to change their country or cannot change their country

 const continent = 'Asia'; // statement continent must be constant value, because indonesia is constant in Asia continent

 const isIsland = true; 
 //statement isIsland must be const value, because according to country that indonesia isIsland is true
 //and cannot be changed because we can look at the maps that indonesia is island country.

 //Try to change one of the changed variables now, and observe what happens
 //continent = 'europe';, this is must be error because continent is a constant value
 //why? because indonesia is in asia not in europe continent.

// end of LECTURE: let, const and var
////////////////////////////////////////////////