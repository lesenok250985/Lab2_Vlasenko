const fs = require('fs');


try {
    const dataSync = fs.readFileSync('input.txt', 'utf8');
    console.log("synch czyt file:");
    console.log(dataSync);
} catch (err) {
    console.error("blad synch czyt file:", err);
}


fs.readFile('input.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error("oj blad:", err);
        return;
    }
    console.log("\nasynch czytania file:");
    console.log(dataAsync);
});
