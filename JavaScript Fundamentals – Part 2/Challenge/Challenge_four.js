//CHALLENGE #4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = []
  
  for(let bill = 0; bill < bills.length; bill++){
      tips[bill] = calcTip(bills[bill]);
      totals[bill] = bills[bill] + tips[bill];
  }
  
  console.log(totals);
  
  
//Bonus #
  const calcAverage = (arr) => {
      let sum = 0;
      for(let index = 0; index < arr.length; index++){
          sum += arr[index];
      }
      return sum / arr.length;
  }
  
  const billAverage = calcAverage(bills);
  console.log(billAverage);
  