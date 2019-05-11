// Create a constructor for hangman
// Setup two attributes one for the word and another ffor the number of attempts
// create two instances of it and print both to the console

// ==== PART II
// 1. Setup the word instance as an array of lowercase letters
// 2. Setup an instance to store guessed letters 
// 3. Create an instance that gives you the word puzzle back, if the letters has been guessed and added to guessed letters array



const Hangman = function (word, guess) {
    this.word = word.toLowerCase().split('')
    this.guess = guess
    this.guessedLetters = []
}

// Create Get Puzzles prototype
Hangman.prototype.getPuzzle = function () {
    console.log(this.word)
    let puzzle = ''
    this.word.forEach((word )=> {
        if (this.guessedLetters.includes(word) || word === ' ') {
            puzzle += word
        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

// Create prototype method to manage user guesses for the  hangman game
Hangman.prototype.makeGuess = function (guess) {
    value = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(value)
    const isBadGuess = !this.word.includes(value)

    isUnique ? this.guessedLetters.push(value) : null;
    isUnique && isBadGuess ? this.guess-- : this.guess
}


const gameOne = new Hangman('Food Haven', 2 )
const gameTwo = new Hangman('Eat', 2 )
 

console.log(gameOne)
console.log(gameOne.getPuzzle())

console.log(gameTwo)
console.log(gameTwo.getPuzzle())



