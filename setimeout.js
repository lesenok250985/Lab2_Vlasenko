const listRecursive = ["A", "B", "C", "D", "E"];

function printListRecursively(index = 0) {
    if (index < listRecursive.length) {
        console.log(`element listy: ${listRecursive[index]}`);
        setTimeout(() => printListRecursively(index + 1), 0);
    }
}

console.log("\nwynik z recurs:");
printListRecursively();
