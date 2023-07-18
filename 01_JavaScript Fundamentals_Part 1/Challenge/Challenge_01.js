//CHALLENGE #1

/* Write your code below. Good luck! 🙂 */

//Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
const massMark = 78; //kilogram
const heightMark = 1.69; //meter
const massJhon = 92; //kilogram
const heightJohn = 1.95; //meter

//Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
const BMIMark = massMark / (heightMark * heightMark);
const BMIJhon = massJhon / (heightJohn * heightJohn);

//or can use this operator (**) for power calculation
//const massJhon = massJhon / (heightJhon ** 2);

//Log the value of BMIMark and BMIJohn to the console.
console.log(BMIMark, BMIJhon);

//BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
const markHigherBmi = BMIMark > BMIJhon; //for checking is that bmi mark is higher than bmi mark?

console.log(markHigherBmi);

//CHALLENGE #2

/* Write your code below. Good luck! 🙂 

rint a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

*/

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
