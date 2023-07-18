// Remember, we're gonna use strict mode in all scripts now!!!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  return result + "...";
};

console.log(printForecast(data1));
console.log(printForecast(data2));

/**
 * my another solving function for the challenge
 
const printForecast = (arr) => {
  return (
    arr.map((item, index) => `... ${item}ºC in ${index + 1} days`).join("") +
    "..."
  );
};

console.log(printForecast(data1));
console.log(printForecast(data2));

*/
