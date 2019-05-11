const guessEl = document.getElementById('guessRemaining')
const textHolder = document.querySelector('#puzzle')


// Initialize variables in DOM
textHolder.textContent = (gameOne.getPuzzle())
guessEl.textContent = gameOne.guess

window.addEventListener('keypress', (e) => {
    const guess = e.key
    gameOne.makeGuess(guess)
    textHolder.textContent = (gameOne.getPuzzle())
    guessEl.textContent = gameOne.guess
    console.log(gameOne.makeGuess(guess))
    console.log(gameOne)
})