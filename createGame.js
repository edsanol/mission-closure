
const createGame = (secretNumber) => {
    return function guessNumber (num) {
        if(num>secretNumber){
            return 'Muy alto'
        } else if(num<secretNumber){
            return 'Muy bajo'
        } else if (num === secretNumber){
            return 'Lo adivinaste!'
        }
    }
}
const guess = createGame(5) // numero secreto: 5
console.log(guess(8))
console.log(guess(4))
console.log(guess(5))
