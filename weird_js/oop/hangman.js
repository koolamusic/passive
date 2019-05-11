// Create a constructor for hangman
// Setup two attributes one for the word and another ffor the number of attempts
// create two instances of it and print both to the console

// ==== PART II
// 1. Setup the word instance as an array of lowercase letters
// 2. Setup an instance to store guessed letters 
// 3. Create an instance that gives you the word puzzle back, if the letters has been guessed and added to guessed letters array



const Hangman = function (word, remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.guess = remainingGuess
    this.guessedLetters = ['o', 'e']
    this.correct = this.challenge === word

}

// Create Get Puzzles prototype
Hangman.prototype.getPuzzle = function () {
    console.log(this.word)
    const blob = '*';
    result = new String
    this.word.forEach(word => {
        if (this.guessedLetters.indexOf(word) != -1 || word === ' ') {
            result+=word
        }
        result+=blob
    });
    return result
}


const gameOne = new Hangman('Food Haven', 2 )
const gameTwo = new Hangman('Eat', 2 )

console.log(gameOne)
console.log(gameTwo)

console.log(gameOne.getPuzzle())
console.log("HERE IS", gameTwo.getPuzzle())



// Hangman.prototype.setGuess = function (word) {
//     return this.guess = word !== this.challenge ? this.guess - 1 : this.guess
// }


// const gameOne = new Hangman('coundtry')
// gameOne.setGuess('coundtry')
// const gameTne = new Hangman('counfdtry')


// console.log(gameOne)
// console.log(gameTne)