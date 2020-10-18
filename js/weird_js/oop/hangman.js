// Create a constructor for hangman
// Setup two attributes one for the word and another ffor the number of attempts
// create two instances of it and print both to the console

// ==== PART II
// 1. Setup the word instance as an array of lowercase letters
// 2. Setup an instance to store guessed letters 
// 3. Create an instance that gives you the word puzzle back, if the letters has been guessed and added to guessed letters array



// const Hangman = function (word, guess) {
//     this.word = word.toLowerCase().split('')
//     this.guess = guess
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Create Get Puzzles prototype
// Hangman.prototype.getPuzzle = function () {
//     console.log(this.word)
//     let puzzle = ''
//     this.word.forEach((word )=> {
//         if (this.guessedLetters.includes(word) || word === ' ') {
//             puzzle += word
//         } else {
//             puzzle += '*'
//         }
//     });
//     return puzzle
// }

// Create prototype method to manage user guesses for the  hangman game
// Hangman.prototype.makeGuess = function (guess) {
//     value = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(value)
//     const isBadGuess = !this.word.includes(value)

//     isUnique ? this.guessedLetters.push(value) : null;
//     isUnique && isBadGuess ? this.guess-- : this.guess
// }

// Prototype to define the state of the game as Finished | Failed || Playing
// Hangman.prototype.calculateStatus = function () {
//     console.log(this.guessedLetters)
//     const finished = this.word.every((word) => this.guessedLetters.includes(word))
//     if (this.guess === 0) {
//        return this.status = 'FAILED ~!!!!'
//     } else if (finished) {
//         return this.status = 'finished'
//     } else {
//        return this.status = '!PLAYING'
//     }
    
// }





// Switching to Javascript Class Syntax
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        // Fixing an edge case where there is no match if the word has spaces within it
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}