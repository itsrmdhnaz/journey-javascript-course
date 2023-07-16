//CHALLENGE #4
const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip;
(bill >= 50 && bill <= 300) ? tip = 15/100 * bill : tip = 20/100 * bill ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

//or you can use 0.15 and 0.2 for the tip
