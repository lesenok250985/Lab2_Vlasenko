const fs = require('fs');
const { Transform } = require('stream'); // Добавлен импорт Transform

// Чтение файла синхронно
try {
    const dataSync = fs.readFileSync('input.txt', 'utf8');
    console.log("synch czyt file:");
    console.log(dataSync);
} catch (err) {
    console.error("blad przy czytanie file:", err);
}

// Чтение файла асинхронно
fs.readFile('input.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error("blad czytania file:", err);
        return;
    }
    console.log("\nasynch czytanie file:");
    console.log(dataAsync);
});


const filterStream = new Transform({
    transform(chunk, encoding, callback) {
     
        const filteredData = chunk.toString().replace(/[^a-zA-Z\s]/g, '');
        callback(null, filteredData);
    }
});


function caesarCipher(text, shift) {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}


const caesarStream = new Transform({
    transform(chunk, encoding, callback) {
        const encryptedData = caesarCipher(chunk.toString(), 3); // Сдвиг на 3 позиции
        callback(null, encryptedData);
    }
});


const readStream = fs.createReadStream('input.txt', 'utf8');
readStream
    .pipe(filterStream)    
    .pipe(caesarStream)     
