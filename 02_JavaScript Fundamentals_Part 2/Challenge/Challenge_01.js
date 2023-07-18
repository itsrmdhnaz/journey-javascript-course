//CHALLENGE #1
/* Write your code below. Good luck! 🙂 */
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  return avgDolphins >= 2 * avgKoalas
    ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})` : avgKoalas >= 2 * avgDolphins
    ? `Koalas win (${avgDolphins} vs. ${avgKoalas})`: `No team wins..`;
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(scoreDolphins2, scoreKoalas2));
