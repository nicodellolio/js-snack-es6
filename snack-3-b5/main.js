
const word = 'Mannaggia'

//unsing split, reverse, join
function flipWordsSRJ(word) {
    const reversedWord = word.split('').reverse().join('')
    console.log(reversedWord);
}
flipWordsSRJ(word)

//using spread
function flipWordsSPR (){
    const reversedWord = [...word].reverse().join('')
    console.log(reversedWord);
}
flipWordsSPR(word)


