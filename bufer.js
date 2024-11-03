
const alphabetBuffer = Buffer.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ascii');

console.log("Алфавит в ASCII:");
console.log(alphabetBuffer.toString('ascii'));


console.log("\nАлфавит в UTF-8:");
console.log(alphabetBuffer.toString('utf8'));
