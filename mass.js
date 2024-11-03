const alphabet = ["a", "b", "c", "a", "d", "e", "a"]; 
let index = 0;

function printNextLetter() {
    if (index >= alphabet.length) return;

    const currentLetter = alphabet[index];
    console.log(currentLetter);
    index++;

    const nextDelay = (alphabet[index] === currentLetter) ? 2000 : 500;

    setTimeout(printNextLetter, nextDelay);
}

printNextLetter();
