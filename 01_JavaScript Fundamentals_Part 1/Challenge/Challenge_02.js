//CHALLENGE #3

/* Write your code below. Good luck! 🙂 */

//sample data of two scores 
/*
TEST DATA: 
Dolphins scored 96, 108, and 89.
Koalas scored 88, 91, and 110.
*/

/*
 Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
*/
const scoreDolphins = (96 + 108 + 89) / 3 
const scoreKoalas = (88 + 91 + 110) / 3 

/*
Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
*/

if(scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`);
} else if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
} else {
    console.log(`Koalas win the trophy`);
}