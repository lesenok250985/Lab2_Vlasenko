
function generateLine(char, count) {
    return char.repeat(count);
}


function createArt() {
    const art = [
        generateLine('.', 10) + generateLine('x', 12) + generateLine('.', 10),
        generateLine('.', 8) + generateLine('x', 16) + generateLine('.', 8),
        generateLine('.', 6) + generateLine('x', 20) + generateLine('.', 6),
        generateLine('.', 4) + generateLine('x', 24) + generateLine('.', 4),
        generateLine('.', 3) + generateLine('#', 5) + generateLine('.', 4) + generateLine('#', 5) + generateLine('.', 4) + generateLine('#', 5) + generateLine('.', 3),
        generateLine('.', 2) + generateLine('#', 7) + generateLine('.', 2) + generateLine('#', 7) + generateLine('.', 2) + generateLine('#', 7) + generateLine('.', 2),
        generateLine('.', 1) + generateLine('#', 31) + generateLine('.', 1),
        generateLine('#', 33),
    ];

    art.forEach(line => console.log(line));
}


console.log("\nГрафика:");
createArt();
