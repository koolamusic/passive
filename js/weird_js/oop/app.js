
// const gameOne = new Hangman('Food Haven', 2 )
// const gameTwo = new Hangman('Eat', 2 )
 

// console.log("Puzzle I--->",gameOne.puzzle)
// console.log("Puzzle II--->",gameTwo.puzzle)



const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guessRemaining')
const game1 = new Hangman('Food Haven', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})