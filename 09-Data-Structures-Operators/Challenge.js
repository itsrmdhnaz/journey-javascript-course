////////////////////////////////////////////////////////////////////////
// Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * Create one player array for each team (variables 'players1' and
'players2')
 */
const [players1, players2] = game.players;
//or can use const {players: [players1, players2]} = game;

/**
 * The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
 */
const [gk, ...fieldPlayers] = players1;

/**
 * Create an array 'allPlayers' containing all players of both teams (22
players)
 */
const allPlayers = [...players1, ...players2];

/**
 * During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
 */
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];

/**
 * Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
 */
const { team1, team2, x: draw } = game.odds;
//or can use const {odds: {team1, x: draw, team2}} = game;

/**
 * Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
 */
const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/**
 * The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
 */
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

// end of Challenge #1
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #2

/**
 * Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
 */
for (const [posistion, player] of game.scored.entries())
  console.log(`Goal ${posistion + 1}: ${player}`);

/**
 * Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
 */
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= Object.values(game.odds).length;
console.log(average.toFixed(2));

/**
 * Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
 */
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw:' : `victory ${team}:`;
  console.log(`Odd of ${str} ${odd}`);
}

/**
 * Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
 */
const scorers = {};

for (const player of game.scored.sort()) {
  scorers[player] = (scorers[player] || 0) + 1;
}

console.log(scorers);

/// end of Challenge #2
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/**
   * Create an array 'events' of the different game events that happened (no
duplicates)
   */
const events = [...new Set(gameEvents.values())];
console.log(events);

/**
 * . After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
 */

/**
 * Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
 */
console.log(`An event happened, on
average, every ${[...gameEvents.keys()].pop() / gameEvents.size} minutes`);

/**
 * Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
 */
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} Half] ${min}: ${event}`);
}

/// end of Challenge #3
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/**
 * Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
 */

document.querySelector('button').addEventListener('click', () => {
  const input = document.querySelector('textarea').value;
  const str = input.split('\n');

  for (const [index, word] of str.entries()) {
    const [first, second] = word.trim().toLowerCase().split('_');
    const result = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(result.padEnd(20, ' ') + `✅`.repeat(index + 1));
  }
});

/// end of Challenge #4
//////////////////////////////////////////////////////////////////////////
