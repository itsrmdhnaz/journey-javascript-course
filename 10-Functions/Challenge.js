////////////////////////////////////////////////////////////////////////
// Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  /**
   * Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
   */

  /**
   * Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number
   */
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    /**
     * Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
     */
    this.displayResults();
    this.displayResults('string');
  },

  /**
   * Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
   */
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : type === 'string'
      ? console.log(`Poll result are ${this.answers.join(', ')}`)
      : null;
  },
};

// poll.registerNewAnswer();

/**
 * Call this method whenever the user clicks the "Answer poll" button
 */
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/**
   * Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
   */
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, 'string');
poll.displayResults.call({ answers: data2 });

// end of Challenge #1
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();

// end of Challenge #2
////////////////////////////////////////////////////////////////////////
