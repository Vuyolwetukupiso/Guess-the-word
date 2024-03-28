const scrambled = document.getElementById("scrambled")
const refreshButton = document.getElementById("refreshButton")
const checkWord = document.getElementById("checkWord")
const inputField = document.getElementById("inputField")
const output = document.getElementById("output")

const wordList = [
    "accentuate",
    "appease",
    "align",
    "candour",
    "empathy",
    "briogus",
    "abnegation",
    "deride",
    "pitfall",
    "innovation",
];

// Shuffle the arrays

function shuffleArray(wordList){
    for(let i = wordList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // Swap letters
    let temp = wordList[i];
    wordList[i] = wordList[j];
    wordList[j] = temp;
    }
    const randomLetters =  wordList[0].split("").sort(() => Math.random() - 0.5).join("");
 
    return randomLetters
}

// Display shuffled word
document.addEventListener('DOMContentLoaded', ()=>{
    scrambled.textContent = shuffleArray(wordList)
})

refreshButton.addEventListener("click", ()=> {
    scrambled.textContent = shuffleArray(wordList)
})

// Function to check output and display result
function check() {
    let inputField = document.getElementById("inputField");
    let output = document.getElementById("output");
    if (
        inputField.value.toLocaleLowerCase() === 
        displayWord.toLocaleLowerCase()
    )
    output.innerHTML = "Result: Great! Correct answer!";
    else { output.innerHTML = "Result: Oops! Incorrect answer!";
}
}
// Function to shuffle letters
function shuffle(strArray) {
    for ( i = 0; i < strArray.length - 1; i++) {
        let k = Math.floor(Math.random() * strArray.length);
        // Swap letters
        let temp = strArray[i];
        strArray[i] = strArray[k];
        strArray[k] = temp;
    }
    return strArray.join("")
}


