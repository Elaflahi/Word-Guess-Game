// Array
const wor = ["Seven", "The Girl With The Dragon Tatoo" , "Gone Girl "];
// Random word
let randNum = Math.floor(Math.random() * AudioWorkletNode.length);
let chosenWord = word[randNum];
let correctWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName ('underscore');
let docCorrectGuess = document.getElementsByClassName ('correctguess');
let docWrongGuess = document.getElementsByClassName ('wrongguess')

//create underscores

let generateUnderScore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get the guesses

document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keycode);
    //if guess is correct
    if(chosenWord.indexOf(keyword) > -1) {
        correctWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docCorrectGuess[0].innerHTML = correctWord;
        if(underScore.join('') == chosenWord) {
            alert('You Win');
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord
    }    
});
docUnderScore[0].innerHTML = generateUnderScore();join(' ');
