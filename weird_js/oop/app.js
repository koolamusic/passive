
const gameOne = new Hangman('Food Haven', 2 )
const gameTwo = new Hangman('Eat', 2 )
 

console.log(gameOne)
// gameOne.makeGuess(guess)
console.log("Puzzle I--->",gameOne.getPuzzle())

console.log(gameTwo)
console.log("Puzzle II--->",gameTwo.getPuzzle())




const guessEl = document.getElementById('guessRemaining')
const textHolder = document.querySelector('#puzzle')


// Initialize variables in DOM
textHolder.textContent = (gameOne.getPuzzle())
guessEl.textContent = gameOne.guess

window.addEventListener('keypress', (e) => {
    const guess = e.key
    gameOne.makeGuess(guess)
    gameOne.calculateStatus()
    textHolder.textContent = (gameOne.getPuzzle())
    guessEl.textContent = gameOne.guess 
    console.log(gameOne.status)
})