const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');


const filterStream = new Transform({
    transform(chunk, encoding, callback) {
   
        const filteredData = chunk.toString().replace(/[^a-zA-Z\s]/g, '');
        callback(null, filteredData);
    }
});


const readStream = createReadStream('input.txt', 'utf8');
const writeStream = createWriteStream('filtered_output.txt');


readStream.pipe(filterStream).pipe(writeStream);
readStream.pipe(filterStream).pipe(process.stdout);
