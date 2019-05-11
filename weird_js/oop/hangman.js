// Create a constructor for hangman
// Setup two attributes one for the word and another ffor the number of attempts
// create two instances of it and print both to the console


const Hangman = function (word, remainingGuess) {
    this.word = word;
    this.guess = remainingGuess
    this.challenge = 'country'


    this.game = `California is a beautiful ${word}`
    this.correct = this.challenge === word
        // return `You have ${attempts} attempts`
}
Hangman.prototype.setGuess = function (word) {
    return this.guess = word !== this.challenge ? this.guess - 1 : this.guess
}


const gameOne = new Hangman('coundtry')
gameOne.setGuess('coundtry')
const gameTne = new Hangman('counfdtry')


console.log(gameOne)
console.log(gameTne)