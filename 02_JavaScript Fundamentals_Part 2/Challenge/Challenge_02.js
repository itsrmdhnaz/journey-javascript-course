//CHALLENGE #2
/* Write your code below. Good luck! 🙂 */
const bills = [125,555,44];

const calcTip = (bills) => {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;  
}

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [];
totals.push(bills[0]+tips[0]);
totals.push(bills[1]+tips[1]);
totals.push(bills[2]+tips[2]);

console.log(totals);